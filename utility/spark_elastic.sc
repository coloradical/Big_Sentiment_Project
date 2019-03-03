/*
* Connecting Spark to Elastic
* Run in Spark Shell or Spark Submit
* 
* posts a sample json to Elasticsearch
*
*/

import org.apache.spark.SparkContext
import org.apache.spark.SparkContext._
import org.elasticsearch.spark._

val ELASTIC_URL = "10.142.0.4:9200"
val numbers = Map("one" -> 1, "two" -> 2, "three" -> 3)
val airports = Map("arrival" -> "Otopeni", "SFO" -> "San Fran")

sc.makeRDD(Seq(numbers, airports)).saveToEs("spark/docs", Map("es.nodes" -> ELASTIC_URL))
