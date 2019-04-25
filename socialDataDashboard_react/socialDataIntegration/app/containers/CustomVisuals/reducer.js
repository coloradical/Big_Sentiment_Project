/*
 *
 * CustomVisuals reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, PUT_TWEET_INFO, PUT_IMAGE_INFO, PUT_TWITTER_INFO, SENTIMENT_INFO } from './constants';

export const initialState = fromJS({
  topicType: '',
  topicTweet: [],
  topicImage: []
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
      case SENTIMENT_INFO:
      return state.set('sentimentInfo', action.rating); //eigteenth 'sentimentInfo' is from const on index 
    default:
      return state;
  }
}

export default customVisualsReducer;
