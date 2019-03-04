/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');

const selectRouter = state => state.get('router');

const makeSelectCurrentUser = () =>
  createSelector(selectGlobal, globalState => globalState.get('currentUser'));

const makeSelectLocation = () =>
  createSelector(selectRouter, routerState =>
    routerState.get('location').toJS(),
  );

export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLocation,
};
