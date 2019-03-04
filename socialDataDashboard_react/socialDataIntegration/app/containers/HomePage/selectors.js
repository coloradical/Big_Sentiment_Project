/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('home', initialState);

const makeSelectTopic = () =>
  createSelector(selectHome, homeState => homeState.get('topic'));

const makeSelectLoading = () =>
  createSelector(selectHome, homeState => homeState.get('loading'));

const makeSelectError = () =>
  createSelector(selectHome, homeState => homeState.get('error'));

const makeSelectTopicInfo = () =>
  createSelector(selectHome, homeState => homeState.get('topicInfo'));
export {
  selectHome, makeSelectTopic, makeSelectLoading,
  makeSelectError,
  makeSelectTopicInfo,
};
