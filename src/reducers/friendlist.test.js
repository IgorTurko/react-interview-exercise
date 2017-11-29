import reducer from './friendlist';
import * as types from '../constants/ActionTypes';

const defaultState = {
  currentPage: 1,
  friends: [
    {
      id: 0,
      name: 'Theodore Roosevelt',
      starred: true,
      sex: "m",
    },
    {
      id: 1,
      name: 'Abraham Lincoln',
      starred: false,
      sex: "f",
    },
    {
      id: 2,
      name: 'George Washington',
      starred: false,
      sex: "m",
    }
  ]
};

it('should return the initial state', () => {
  expect(
    reducer(undefined, {})
  )
  .toEqual(defaultState)
});

it('should add friend', () => {
  const name = "John Doe";
  const id = 123;

  expect(
    reducer(undefined, {
      type: types.ADD_FRIEND,
      id,
      name
    }).friends
  )
  .toEqual([
    {
      id: 0,
      name: 'Theodore Roosevelt',
      starred: true,
      sex: "m",
    },
    {
      id: 1,
      name: 'Abraham Lincoln',
      starred: false,
      sex: "f",
    },
    {
      id: 2,
      name: 'George Washington',
      starred: false,
      sex: "m",
    },
    {
      id,
      name
    }
  ]);
});

it('should delete friend if friend exists', () => {
  const id = 1;

  expect(
    reducer(undefined, {
      type: types.DELETE_FRIEND,
      id
    }).friends
  )
  .toEqual([
    {
      id: 0,
      name: 'Theodore Roosevelt',
      starred: true,
      sex: "m",
    },
    {
      id: 2,
      name: 'George Washington',
      starred: false,
      sex: "m",
    }
  ]);
});

it('should not delete friend if friend does not exist', () => {
  const id = 111;

  expect(
    reducer(undefined, {
      type: types.DELETE_FRIEND,
      id
    }).friends
  )
  .toEqual(defaultState.friends);
});

it('should star friend if friend exists', () => {
  const id = 1;

  expect(
    reducer(undefined, {
      type: types.STAR_FRIEND,
      id
    }).friends
  )
  .toEqual([
    {
      id: 0,
      name: 'Theodore Roosevelt',
      starred: true,
      sex: "m",
    },
    {
      id: 1,
      name: 'Abraham Lincoln',
      starred: true,
      sex: "f",
    },
    {
      id: 2,
      name: 'George Washington',
      starred: false,
      sex: "m",
    }
  ]);
});

it('should not star friend if friend does not exist', () => {
  const id = -89;

  expect(
    reducer(undefined, {
      type: types.STAR_FRIEND,
      id
    }).friends
  )
  .toEqual(defaultState.friends);
});

it('should set friend sex if friend exists', () => {
  const id = 0, sex = "sex";

  expect(
    reducer(undefined, {
      type: types.SET_FRIEND_SEX,
      id,
      sex
    }).friends
  )
  .toEqual([
    {
      id: 0,
      name: 'Theodore Roosevelt',
      starred: true,
      sex: "sex",
    },
    {
      id: 1,
      name: 'Abraham Lincoln',
      starred: false,
      sex: "f",
    },
    {
      id: 2,
      name: 'George Washington',
      starred: false,
      sex: "m",
    }
  ]);
});

it('should not change friend sex if friend does not exist', () => {
  const id = 989;

  expect(
    reducer(undefined, {
      type: types.SET_FRIEND_SEX,
      id,
      sex: "any"
    }).friends
  )
  .toEqual([
    {
      id: 0,
      name: 'Theodore Roosevelt',
      starred: true,
      sex: "m",
    },
    {
      id: 1,
      name: 'Abraham Lincoln',
      starred: false,
      sex: "f",
    },
    {
      id: 2,
      name: 'George Washington',
      starred: false,
      sex: "m",
    }
  ]);
});

it('should update selected page', () => {
  const page = 123;

  expect(
    reducer(undefined, {
      type: types.SET_PAGE,
      page
    }).currentPage
  )
  .toEqual(page);
});
