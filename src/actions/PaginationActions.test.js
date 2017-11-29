import * as actions from './PaginationActions';
import * as types from '../constants/ActionTypes';

it('should create an action to set a new page in friend list', () => {
  const page = 123;
  const expectedAction = {
    type: types.SET_PAGE,
    page
  }

  expect(actions.setPage(page)).toEqual(expectedAction);
});