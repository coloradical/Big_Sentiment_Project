import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { putTweetInfo, putImageInfo, putTwitterInfo } from './actions';
import { PULL_RELATED_DATA } from './constants';
// Individual exports for testing
export function* getTopicData(action) {
  // Select topic
  const topic = action.name;
  const requestURL = `http://34.73.60.209:9200/trending/_search?pretty=true`;
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
      "perDateTweet": { "date_histogram": { "field": "post_date", "interval": "day", "format": "MMM-dd" } }
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

    // const twitterData = yield call(request, twittURL, {
    //   method: 'GET',
    //   headers: requestHeader
    // });
    yield put(putTweetInfo(aggregateData.hits.hits));
    yield put(putImageInfo(imageData.hits.hits));
    // yield put(putTwitterInfo(twitterData.status[0]));

  } catch (err) {
    console.error(err);
    //yield put(repoLoadingError(err));
  }
}

export function* getTwitterData(action) {
  const topic = action.name;
  const twittURL = `https://untitled-szbxtgt3g9t2.runkit.sh/?endpoint=users/search.json&searchParam=%7B%22q%22:%22${topic}%22%7D`
  let requestHeader = {
    'Content-Type': 'application/json',
  }
  try {
    const twitterData = yield call(request, twittURL, {
      method: 'GET',
      headers: requestHeader
    });
    yield put(putTwitterInfo(twitterData.status[0]));
  } catch (err) {
    console.error(err);
  }
}
export default function* customVisualsSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(PULL_RELATED_DATA, getTopicData);
  yield takeLatest(PULL_RELATED_DATA, getTwitterData);
}
