import expect from 'expect';
import * as actions from './index';

describe('actions', () => {
  it('should create an action UPDATE_INPUT_VALUE', () => {
    const value = 'a';
    const expectedAction = {
      type: 'UPDATE_INPUT_VALUE',
      payload: value,
    };
    expect(actions.updateInputValue(value)).toEqual(expectedAction);
  });

  it('should create an action SET_APPLIED_FILTER', () => {
    const filter = 'Comedy';
    const expectedAction = {
      type: 'SET_APPLIED_FILTER',
      payload: filter,
    };
    expect(actions.setAppliedFilter(filter)).toEqual(expectedAction);
  });
});
