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

export { makeSelectCustomVisuals, selectCustomVisualsDomain, makeSelectTopicType };
