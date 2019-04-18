from pyspark import SparkContext
from pyspark.streaming import StreamingContext
from pyspark.streaming.kafka import KafkaUtils
import json
import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer

ssc = StreamingContext(sc, 1)

es_write_conf = {
        "es.nodes" : "elastic-2",
        "es.port" : "9200",
        "es.resource" : 'test1/doc',
        "es.input.json": "yes",
        "es.mapping.id": "id"
    }

sent_analyzer = SentimentIntensityAnalyzer()
    
def assign_sentiment(x):
	print(x)
	x['sentiment'] = sent_analyzer.polarity_scores(x['title']);
	print(x['sentiment'])
	return x;

lines = KafkaUtils.createDirectStream(ssc, ['test1'], {"metadata.broker.list": "35.232.117.118:9092"})
lines.pprint()
sentiments = lines.map(lambda j: assign_sentiment(json.loads(j[1])))

final_rdd = sentiments.map(json.dumps).map(lambda x: ('key', x))
final_rdd.pprint()
final_rdd.foreachRDD(lambda j: j.saveAsNewAPIHadoopFile(
    path='-',
    outputFormatClass="org.elasticsearch.hadoop.mr.EsOutputFormat",
    keyClass="org.apache.hadoop.io.NullWritable",
    valueClass="org.elasticsearch.hadoop.mr.LinkedMapWritable",
    conf={
        "es.nodes" : "elastic-2",
        "es.port" : "9200",
        "es.resource" : "test1/_doc",
        "es.input.json": "true",
        "es.mapping.id": "id"
    }
))

ssc.start()
ssc.awaitTermination()