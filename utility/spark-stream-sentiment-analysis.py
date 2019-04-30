from pyspark import SparkContext, SparkConf
from pyspark.streaming import StreamingContext
from pyspark.streaming.kafka import KafkaUtils
import json
import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer

appName = "Spark-Kafka-Sentiment-Stream"
conf = SparkConf().setAppName(appName)
sc = SparkContext(conf=conf)
ssc = StreamingContext(sc, 20)

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
    score = sent_analyzer.polarity_scores(x['title'])['compound'];
    if score < -0.1:
        x['sentiment'] = -1
    elif score > 0.1:
        x['sentiment'] = 1
    else:
        x['sentiment'] = 0
    print(x['sentiment'])
    return x;

lines = KafkaUtils.createDirectStream(ssc, ['trending'], {"metadata.broker.list": "35.232.117.118:9092"})
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
        "es.resource" : "trending-sentiment2.0/_doc",
        "es.input.json": "true",
        "es.mapping.id": "id"
    }
))

ssc.start()
ssc.awaitTermination()
