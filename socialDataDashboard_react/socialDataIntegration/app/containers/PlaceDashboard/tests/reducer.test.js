import { fromJS } from 'immutable';
import placeDashboardReducer from '../reducer';

describe('placeDashboardReducer', () => {
  it('returns the initial state', () => {
    expect(placeDashboardReducer(undefined, {})).toEqual(fromJS({}));
  });
});
