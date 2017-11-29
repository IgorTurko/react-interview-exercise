import * as actions from './FriendsActions';
import * as types from '../constants/ActionTypes';

it('should create an action to add a friend', () => {
  const name = "John Doe";
  const expectedAction = {
    type: types.ADD_FRIEND,
    id: -1,
    name
  }

  expect(actions.addFriend(name)).toEqual(expectedAction);
});

it('should generate new id', () => {
  const name = "John Doe";
  const expectedId = -2;
  
  expect(actions.addFriend(name).id).toEqual(expectedId);
});

it('should create an action to delete a friend', () => {
  const id = 999;
  const expectedAction = {
    type: types.DELETE_FRIEND,
    id
  }

  expect(actions.deleteFriend(id)).toEqual(expectedAction);  
});

it('should create an action to star a friend', () => {
  const id = 999;
  const expectedAction = {
    type: types.STAR_FRIEND,
    id
  }

  expect(actions.starFriend(id)).toEqual(expectedAction);  
});

it('should create an action to set a friend sex', () => {
  const id = 999, sex = "sex";
  const expectedAction = {
    type: types.SET_FRIEND_SEX,
    id,
    sex
  }

  expect(actions.setFriendSex(id, sex)).toEqual(expectedAction);  
});