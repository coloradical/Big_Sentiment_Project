/*
 *
 * CustomVisuals reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION } from './constants';

export const initialState = fromJS({
  topicType: '',
  topicName: '',
});

function customVisualsReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case CHANGE_TOPICTYPE:
      return state
      .set('topicType', topicType)
    default:
      return state;
  }
}

export default customVisualsReducer;
