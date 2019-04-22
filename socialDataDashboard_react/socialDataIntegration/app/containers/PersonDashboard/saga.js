import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { putTopicInfo, putTweetInfo, putImageInfo } from './actions';
import { GET_TOPIC_INFO } from './constants';
/**
 * ElasticSearch API request/response handler
 */
export function* getTopicData(action) {
  // Select topic
  const topic = action.name;
  console.log(topic);
  const requestURL = `http://34.73.60.209:9200/trending/_search?pretty=true`;
  const twittURL = `https://untitled-szbxtgt3g9t2.runkit.sh/?endpoint=users/search.json/searchParam=%7B%22q%22:%22${topic}%22%7D`
  let requestBody = {
    "query": {
      "bool": {
        "must": [
          {
            "query_string": {
              "query": `${topic}`,
              "analyze_wildcard": true,
              "default_field": "*"
            }
          }
        ],
        "filter": [],
        "should": [],
        "must_not": []
      }
    },
    "aggs": {
      "perDateTweet": { "date_histogram": { "field": "post_date", "interval": "day" } }
    }
  }
  let requestBody1 = {
    "size": 10, "_source": ["media_url", "upvotes", "post_date"], "query": {
      "bool": {
        "must": [
          {
            "query_string": {
              "query": `${topic} AND media_url:/.*/`
            }
          }
        ]
      }
    }
  }


  let requestHeader = {
    'Content-Type': 'application/json',
  }


  try {
    // Call our request helper (see 'utils/request')
    const aggregateData = yield call(request, requestURL, {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: requestHeader
    });

    const imageData = yield call(request, requestURL, {
      method: 'POST',
      body: JSON.stringify(requestBody1),
      headers: requestHeader
    });

    const twitterData = yield call(request, twittURL, {
      method: 'POST',
      headers: requestHeader
    });
    // console.log(aggregateData.aggregations.hashtags.buckets);
    // console.log(aggregateData.hits.hits);
    // // console.log(aggregateData.hits.hits[2]._source['author']);
    // // console.log(aggregateData.aggregations.perDateTweet.buckets);
    // console.log(imageData.hits.hits)
    console.log(twitterData)
    yield put(putTopicInfo(aggregateData.aggregations.perDateTweet.buckets));
    yield put(putTweetInfo(aggregateData.hits.hits));
    yield put(putImageInfo(imageData.hits.hits));

  } catch (err) {
    console.error(err);
    //yield put(repoLoadingError(err));
  }
}

export default function* personDashboardSaga() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(GET_TOPIC_INFO, getTopicData);
}
