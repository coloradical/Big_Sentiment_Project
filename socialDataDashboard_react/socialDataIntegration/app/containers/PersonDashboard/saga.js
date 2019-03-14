import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { putTopicInfo } from './actions';
import { GET_TOPIC_INFO } from './constants';
/**
 * ElasticSearch API request/response handler
 */
export function* getTopicData(action) {
  // Select topic
  const topic = action.name;
  console.log(topic);
  const requestURL = `http://34.73.60.209:9200/kibana_sample_data_flights/_search?pretty=true`;
  let requestBody = {
    "size": 0,
    "aggs": {
      "group_by_flight": {
        "terms": {
          "field": "Carrier"
        },
        "aggs": {
          "delayCount": {
            "terms": {
              "field": "FlightDelay"
            }
          }
        }
      }
    }
  };
  let requestHeader = {
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Credentials': 'true',
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Methods': 'GET, POST',
    // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  }
  try {
    // Call our request helper (see 'utils/request')
    const aggregateData = yield call(request, requestURL,{
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: requestHeader
    });
    console.log(aggregateData.aggregations.group_by_flight.buckets);
    if(aggregateData.aggregations.group_by_flight.buckets.length > 0){
      let trimmedAggregate = aggregateData.aggregations.group_by_flight.buckets;
      yield put(putTopicInfo(trimmedAggregate));
    }
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
