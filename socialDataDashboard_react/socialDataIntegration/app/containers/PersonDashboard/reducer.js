/*
 *
 * PersonDashboard reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, PUT_TOPIC_INFO, PUT_TWEET_INFO, PUT_IMAGE_INFO } from './constants';

export const initialState = fromJS({
  topic: '',
  topicAggregate: [],
  topicTweet: [],
  topicImage: []
});

function personDashboardReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case PUT_TOPIC_INFO:
      return state.set('topicAggregate', action.topicInfo);
    case PUT_TWEET_INFO:
      return state.set('topicTweet', action.tweetInfo);
    case PUT_IMAGE_INFO:
      return state.set('topicImage', action.topicImage);
    default:
      return state;
  }
}

export default personDashboardReducer;
