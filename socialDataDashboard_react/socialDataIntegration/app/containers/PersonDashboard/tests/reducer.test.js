import { fromJS } from 'immutable';
import personDashboardReducer from '../reducer';

describe('personDashboardReducer', () => {
  it('returns the initial state', () => {
    expect(personDashboardReducer(undefined, {})).toEqual(fromJS({}));
  });
});
