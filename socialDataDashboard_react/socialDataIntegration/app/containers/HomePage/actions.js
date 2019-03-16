/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { CHANGE_TOPIC,SEARCH_TOPIC, LOAD_REPOS_SUCCESS, LOAD_REPOS_ERROR, RESET_STATE,SEARCH_TWITTER} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function changeTopic(name) {
  return {
    type: CHANGE_TOPIC,
    name,
  };
}
export function searchTopic(topic) {
  return {
    type: SEARCH_TOPIC,
    topic,
  }
}

export function TwittProfile(topic) {
  return {
    type: SEARCH_TWITTER,
    topic,
  }
}
export function resetHomePageState(){
  return {
    type: RESET_STATE,
  }
}
/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} topicInfo The repository data
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function reposLoaded(topicInfo) {
  return {
    type: LOAD_REPOS_SUCCESS,
    topicInfo,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function repoLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error,
  };
}
