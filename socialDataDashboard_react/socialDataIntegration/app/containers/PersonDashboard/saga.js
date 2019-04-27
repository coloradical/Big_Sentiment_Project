import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { putTopicInfo } from './actions';
import { GET_TOPIC_INFO } from './constants';
/**
 * ElasticSearch API request/response handler
 */

 //copy from here 
export function* getTopicData(action) {
  // Select topic
  const topic = action.name; //search term 
  const requestURL = `http://34.73.60.209:9200/trending/_search?pretty=true`; //change to what yash sent you 
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

  let requestHeader = {
    'Content-Type': 'application/json',
  }


  try {
    // Call our request helper (see 'utils/request')
    const aggregateData = yield call(request, requestURL, { //making a call using yield call, request is the query(keyword)
      method: 'POST', //if theres a body, method will be post, otherwise it will be GET 
      body: JSON.stringify(requestBody), //same
      headers: requestHeader //same, making api call
    });

    yield put(putTopicInfo(aggregateData.aggregations.perDateTweet.buckets)); //
  } catch (err) {
    console.error(err);
    //yield put(repoLoadingError(err));
  }
}
//to here 

//and create a new functon 

export default function* personDashboardSaga() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount


  yield takeLatest(GET_TOPIC_INFO, getTopicData);
  //GET_TOPIC_INFO is pulling the term from search and making it an action in actions.js
  //your new function from above exported here 
}
