import * as types from '../constants/ActionTypes';

const initialState = {
  currentPage: 1,
  friends: [
    {
      name: 'Theodore Roosevelt',
      starred: true,
      sex: 0,
    },
    {
      name: 'Abraham Lincoln',
      starred: false,
      sex: 0,
    },
    {
      name: 'George Washington',
      starred: false,
      sex: 0,
    }
  ]
};

export default function friends(state = initialState, action) {
  switch (action.type) {
    case types.ADD_FRIEND:
      return {
        ...state,
        friends: [
          ...state.friends,
          {
            name: action.name
          }
        ],
      };
    case types.DELETE_FRIEND:
      return {
        ...state,
        friends: state.friends.filter((item, index) => index !== action.id)
      };
    case types.STAR_FRIEND:
      let friends = [...state.friends];
      let friend = friends.find((item, index) => index === action.id);
      friend.starred = !friend.starred;
      return {
        ...state,
        friends: friends
      };
    case types.SET_PAGE:
      return {
        ...state,
        currentPage: action.page
      };
    default:
      return state;
  }
}
