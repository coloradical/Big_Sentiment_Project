/*
 *
 * CustomVisuals reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, PUT_TWEET_INFO, PUT_IMAGE_INFO, PUT_TWITTER_INFO, PUT_SENTIMENT_INFO, PUT_GOOGLE_SEARCH, PUT_IMAGE_SEARCH, PUT_TOPIC_AGGREGATE } from './constants';

export const initialState = fromJS({
  topicType: '',
  topicTweet: [],
  topicImage: [],
  sentimentInfo: [],
  googleSearch: [],
  imageSearch: [],
  topicAggregate: []
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
    case PUT_GOOGLE_SEARCH:
      return state.set('googleSearch', action.googlesearch);
    case PUT_IMAGE_SEARCH:
      return state.set('imageSearch', action.imagesearch);
    case PUT_TOPIC_AGGREGATE:
      return state.set('topicAggregate', action.topicAgg);
    default:
      return state;
  }
}

export default customVisualsReducer;
