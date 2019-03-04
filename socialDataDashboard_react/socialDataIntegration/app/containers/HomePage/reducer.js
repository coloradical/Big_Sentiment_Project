/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import { CHANGE_TOPIC, SEARCH_TOPIC, LOAD_REPOS_SUCCESS, LOAD_REPOS_ERROR } from './constants';

// The initial state of the App
export const initialState = fromJS({
  topic: '',
  loading: false,
  error: false,
  topicInfo: {
    image: null,
    description: '',
    detailedDescription: null,
    name: ''
  },
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TOPIC:
      return state.set('topic', action.name);
    case SEARCH_TOPIC:
      return state
        .set('loading', true)
        .set('error', false)
    case LOAD_REPOS_SUCCESS:
      return state
        .set('loading', false)
        .set('topicInfo', action.topicInfo);
    case LOAD_REPOS_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default homeReducer;
