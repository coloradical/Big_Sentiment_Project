/*
 *
 * CustomVisuals actions
 *
 */

import { DEFAULT_ACTION, CHANGE_TOPICTYPE, PULL_RELATED_DATA, PUT_TWEET_INFO, PUT_IMAGE_INFO, PUT_TWITTER_INFO, PUT_SENTIMENT_INFO } from './constants';

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
export function pullRelatedData(name) {
  return {
    type: PULL_RELATED_DATA,
    name,
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
export function putSentimentInfo(data) {
  return {
    type: PUT_SENTIMENT_INFO,
    data
  };
}
