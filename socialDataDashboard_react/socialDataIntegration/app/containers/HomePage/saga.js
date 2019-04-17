/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { SEARCH_TOPIC, SEARCH_TWITTER, CHANGE_TOPIC } from './constants';
import { reposLoaded, repoLoadingError, putFuzzyResults } from './actions';

import request from 'utils/request';
import { makeSelectTopic } from './selectors';

/**
 * Google EmotionAPI request/response handler
 */
export function* getRepos() {
  // Select topic
  const username = yield select(makeSelectTopic());
  console.log(username);
  const requestURL = `https://kgsearch.googleapis.com/v1/entities:search?query=${username}&key=AIzaSyBmPgLJOQ3MmR0HWS8XbbNndlU_PooeAF8&limit=1&indent=True`;
  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    console.log(repos.itemListElement[0].result);
    yield put(reposLoaded(repos.itemListElement[0].result));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

export function* getTwitterData() {
  // Select topic
  const query = yield select(makeSelectTopic());
  let requestHeader = {
    'Content-Type': 'application/json',
    'Authorization': 'OAuth oauth_consumer_key="3vjKR6diK03aHHajCaxBBCT4I",oauth_token="743417928926666753-cZ3RlqPGikFRuMSjWvRKBFGlHLWoIZr",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1552762656",oauth_nonce="vh99menFTRO",oauth_version="1.0",oauth_signature="AOUSzVOLaj%2F7lTFRMr3cq%2FvG%2FFs%3D"'
  }
  console.log(query);
  const requestURL = `https://api.twitter.com/1.1/users/search.json?q=${query}`;
  try {
    // Call our request helper (see 'utils/request')
    const data = yield call(request, requestURL,{
      method: 'GET',
      headers: requestHeader
    });

    console.log(repos.itemListElement[0].result);
    yield put(reposLoaded(repos.itemListElement[0].result));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}
export function* getFuzzySearchResults(action) {
  const topic = action.name;
  console.log(topic);
  const requestURL = `http://34.73.60.209:9200/trending_suggestion/_search?pretty`;
  let requestBody = {
    "suggest": {
      "hashtag" : {
        "regex" : `.*${topic.replace(' ', '.*')}.*`,
        "completion" : { 
          "field" : "suggest", 
          "size":10, 
          "skip_duplicates": true
        }
      }
    }
  };
  let requestHeader = {
    'Content-Type': 'application/json',
  }
  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL,{
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: requestHeader
    });
    console.log(response.suggest.hashtag[0].options);
    if(response.suggest.hashtag[0].options.length > 0){
      let fuzzyResults = response.suggest.hashtag[0].options;
      fuzzyResults = fuzzyResults.map((item) => item.text);
      console.log(fuzzyResults);
      yield put(putFuzzyResults(fuzzyResults));
    }
  } catch (err) {
    console.error(err);
    //yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* homePageSaga() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(SEARCH_TOPIC, getRepos);
  yield takeLatest(SEARCH_TWITTER, getTwitterData);
  yield takeLatest(CHANGE_TOPIC, getFuzzySearchResults);
}
