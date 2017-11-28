import * as types from '../constants/ActionTypes';

const initialState = {
  currentPage: 1,
  friends: [
    {
      name: 'Theodore Roosevelt',
      starred: true,
      sex: "m",
    },
    {
      name: 'Abraham Lincoln',
      starred: false,
      sex: "f",
    },
    {
      name: 'George Washington',
      starred: false,
      sex: "m",
    }
  ]
};

export default function friends(state = initialState, action) {
  switch (action.type) {
    case types.ADD_FRIEND:
    {
      return {
        ...state,
        friends: [
          ...state.friends,
          {
            name: action.name
          }
        ],
      };
    }
    case types.DELETE_FRIEND:
    {
      return {
        ...state,
        friends: state.friends.filter((item, index) => index !== action.id)
      };
    }
    case types.STAR_FRIEND:
    {
      let friends = [...state.friends];
      let friend = friends.find((item, index) => index === action.id);
      friend.starred = !friend.starred;
      return {
        ...state,
        friends
      };
    }
    case types.SET_FRIEND_SEX:
    {
      let friends = [...state.friends];
      let friend = friends.find((item, index) => index === action.id);
      friend.sex = action.sex;
      return {
        ...state,
        friends
      };
    }
    case types.SET_PAGE:
    {
      return {
        ...state,
        currentPage: action.page
      };
    }
    default:
      return state;
  }
}
