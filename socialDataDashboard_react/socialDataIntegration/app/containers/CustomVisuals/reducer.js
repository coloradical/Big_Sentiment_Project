/*
 *
 * CustomVisuals reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, PUT_TWEET_INFO, PUT_IMAGE_INFO, PUT_TWITTER_INFO, PUT_SENTIMENT_INFO } from './constants';

export const initialState = fromJS({
  topicType: '',
  topicTweet: [],
  topicImage: [],
  sentimentInfo: [],
});

function customVisualsReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case PUT_TWEET_INFO:
      return state.set('topicTweet', action.tweetInfo);
    case PUT_IMAGE_INFO:
      return state.set('topicImage', action.topicImage);
    case PUT_TWITTER_INFO:
      return state.set('twitterInfo', action.twitterInfo);
    case PUT_SENTIMENT_INFO:
      return state.set('sentimentInfo', action.data);
    default:
      return state;
  }
}

export default customVisualsReducer;
