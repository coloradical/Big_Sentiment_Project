import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the customVisuals state domain
 */

const selectCustomVisualsDomain = state =>
  state.get('customVisuals', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by CustomVisuals
 */

const makeSelectCustomVisuals = () =>
  createSelector(selectCustomVisualsDomain, substate => substate.toJS());

const makeSelectTopicType = () =>
  createSelector(selectCustomVisualsDomain, substate => substate.get('topicType'));

const makeSelectTopicTweet = () =>
  createSelector(selectCustomVisualsDomain, substate => substate.get('topicTweet'));

const makeSelectTopicImage = () =>
  createSelector(selectCustomVisualsDomain, substate => substate.get('topicImage'));

const makeSelectTwitterInfo = () =>
  createSelector(selectCustomVisualsDomain, substate => substate.get('twitterInfo'));

const makeSelectSentimentInfo = () =>
  createSelector(selectCustomVisualsDomain, substate => substate.get('sentimentInfo'));

const makeSelectgoogleSearch = () =>
  createSelector(selectCustomVisualsDomain, substate => substate.get('googleSearch'));

const makeSelectimageSearch = () =>
  createSelector(selectCustomVisualsDomain, substate => substate.get('imageSearch'));

const makeSelectTopicAggregate = () =>
  createSelector(selectCustomVisualsDomain, substate => substate.get('topicAggregate'));

export { makeSelectCustomVisuals, selectCustomVisualsDomain, makeSelectTopicType, makeSelectTopicTweet, makeSelectTopicImage, makeSelectTwitterInfo, makeSelectSentimentInfo, makeSelectgoogleSearch, makeSelectimageSearch, makeSelectTopicAggregate };
