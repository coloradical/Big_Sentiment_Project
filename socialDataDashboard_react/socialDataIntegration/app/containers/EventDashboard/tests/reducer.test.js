import { fromJS } from 'immutable';
import eventDashboardReducer from '../reducer';

describe('eventDashboardReducer', () => {
  it('returns the initial state', () => {
    expect(eventDashboardReducer(undefined, {})).toEqual(fromJS({}));
  });
});
