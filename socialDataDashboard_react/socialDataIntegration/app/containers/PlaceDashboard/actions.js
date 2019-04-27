/*
 *
 * PlaceDashboard actions
 *
 */

import { DEFAULT_ACTION, GET_TOPIC_INFO, PUT_TOPIC_INFO } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function getTopicInfo(name) {
  return {
    type: GET_TOPIC_INFO,
    name
  };
}
export function putTopicInfo(topicInfo) {
  return {
    type: PUT_TOPIC_INFO,
    topicInfo
  };
}
