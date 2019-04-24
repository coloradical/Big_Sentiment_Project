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

/**
 * Default selector used by PersonDashboard
 */

const makeSelectPersonDashboard = () =>
  createSelector(selectPersonDashboardDomain, substate => substate.toJS());

export default makeSelectPersonDashboard;
export { selectPersonDashboardDomain, makeSelectTopicAggregate };
