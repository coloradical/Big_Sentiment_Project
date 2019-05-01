import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { putTopicInfo } from './actions';
import { GET_TOPIC_INFO } from './constants';

//to here 

//and create a new functon 

export default function* personDashboardSaga() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount


  // yield takeLatest(GET_TOPIC_INFO, getTopicData);
  //GET_TOPIC_INFO is pulling the term from search and making it an action in actions.js
  //your new function from above exported here 
}
