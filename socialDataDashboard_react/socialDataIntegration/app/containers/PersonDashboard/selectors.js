import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the personDashboard state domain
 */

const selectPersonDashboardDomain = state =>
  state.get('personDashboard', initialState);

/**
 * Other specific selectors
 */
const makeSelectTopicAggregate = () =>
  createSelector(selectPersonDashboardDomain, substate => substate.get('topicAggregate'));

const makeSelectTopicTweet = () =>
  createSelector(selectPersonDashboardDomain, substate => substate.get('topicTweet'));

const makeSelectTopicImage = () =>
  createSelector(selectPersonDashboardDomain, substate => substate.get('topicImage'));

const makeSelectTwitterInfo = () =>
  createSelector(selectPersonDashboardDomain, substate => substate.get('twitterInfo'));
/**
 * Default selector used by PersonDashboard
 */

const makeSelectPersonDashboard = () =>
  createSelector(selectPersonDashboardDomain, substate => substate.toJS());

export default makeSelectPersonDashboard;
export { selectPersonDashboardDomain, makeSelectTopicAggregate, makeSelectTopicTweet, makeSelectTopicImage, makeSelectTwitterInfo };
