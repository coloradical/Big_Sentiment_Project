/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { SEARCH_TOPIC } from './constants';
import { reposLoaded, repoLoadingError } from './actions';

import request from 'utils/request';
import { makeSelectTopic } from './selectors';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
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

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(SEARCH_TOPIC, getRepos);
}
