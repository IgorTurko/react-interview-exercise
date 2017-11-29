import * as types from '../constants/ActionTypes';

let nextId = -1;

export function addFriend(name) {
  return {
    type: types.ADD_FRIEND,
    id: nextId--,
    name
  };
}

export function deleteFriend(id) {
  return {
    type: types.DELETE_FRIEND,
    id
  };
}

export function starFriend(id) {
  return {
    type: types.STAR_FRIEND,
    id
  };
}

export function setFriendSex(id, sex) {
  return {
    type: types.SET_FRIEND_SEX,
    id,
    sex
  };
}