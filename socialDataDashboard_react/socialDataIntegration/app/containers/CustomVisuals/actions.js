/*
 *
 * CustomVisuals actions
 *
 */

import { DEFAULT_ACTION, CHANGE_TOPICTYPE } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function changeTopicType(topicType) {
  return {
    type: CHANGE_TOPICTYPE,
    topicType,
  };
}
