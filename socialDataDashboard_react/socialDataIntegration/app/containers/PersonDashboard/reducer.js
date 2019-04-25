/*
 *
 * PersonDashboard reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, PUT_TOPIC_INFO } from './constants';

export const initialState = fromJS({
  topic: '',
  topicAggregate: [],
});

function personDashboardReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case PUT_TOPIC_INFO: //you've entered a search term 
      return state.set('topicAggregate', action.topicInfo); //topicAggregate is defined in index.js 
    default:
      return state;
  }
}

export default personDashboardReducer;
