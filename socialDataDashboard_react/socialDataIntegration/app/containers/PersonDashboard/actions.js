/*
 *
 * PersonDashboard actions
 *
 */

import { DEFAULT_ACTION, GET_TOPIC_INFO, PUT_TOPIC_INFO, PUT_TWEET_INFO, PUT_IMAGE_INFO, PUT_TWITTER_INFO } from './constants';

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
export function putTweetInfo(tweetInfo) {
  return {
    type: PUT_TWEET_INFO,
    tweetInfo
  };
}
export function putImageInfo(topicImage) {
  return {
    type: PUT_IMAGE_INFO,
    topicImage
  };
}
export function putTwitterInfo(twitterInfo) {
  return {
    type: PUT_TWITTER_INFO,
    twitterInfo
  };
}