import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the placeDashboard state domain
 */

const selectPlaceDashboardDomain = state =>
  state.get('placeDashboard', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by PlaceDashboard
 */

const makeSelectPlaceDashboard = () =>
  createSelector(selectPlaceDashboardDomain, substate => substate.toJS());

export default makeSelectPlaceDashboard;
export { selectPlaceDashboardDomain };
