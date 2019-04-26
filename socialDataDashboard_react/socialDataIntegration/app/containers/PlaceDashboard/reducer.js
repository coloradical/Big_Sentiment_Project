/*
 *
 * PlaceDashboard reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, PUT_TOPIC_INFO } from './constants';

export const initialState = fromJS({});

function placeDashboardReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case PUT_TOPIC_INFO: 
      return state.set('topicAggregate', action.topicInfo); //topicAggregate is defined in index.js 
    default:
      return state;
  }
}

export default placeDashboardReducer;
