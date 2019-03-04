import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the eventDashboard state domain
 */

const selectEventDashboardDomain = state =>
  state.get('eventDashboard', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by EventDashboard
 */

const makeSelectEventDashboard = () =>
  createSelector(selectEventDashboardDomain, substate => substate.toJS());

export default makeSelectEventDashboard;
export { selectEventDashboardDomain };
