import { fromJS } from 'immutable';
import customVisualsReducer from '../reducer';

describe('customVisualsReducer', () => {
  it('returns the initial state', () => {
    expect(customVisualsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
