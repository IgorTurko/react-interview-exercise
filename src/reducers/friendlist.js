import * as types from '../constants/ActionTypes';
import * as friendList from '../constants/FriendList';

const initialState = {
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

export default function friends(state = initialState, action) {
  switch (action.type) {
    case types.ADD_FRIEND:
    {
      return {
        ...state,
        friends: [
          ...state.friends,
          {
            id: action.id,
            name: action.name
          }
        ],
      };
    }
    case types.DELETE_FRIEND:
    {
      const friends = state.friends
        .map(e => ({...e}))
        .filter(item => item.id !== action.id);
      
      const totalPages = Math.ceil(friends.length / friendList.PAGE_SIZE);

      return {
        ...state,
        currentPage: totalPages < state.currentPage ? totalPages : state.currentPage,
        friends
      };
    }
    case types.STAR_FRIEND:
    {
      const friends = state.friends.map(e => ({...e}));
      const friend = friends.find(item => item.id === action.id);

      if (friend) {
        friend.starred = !friend.starred;
      }
      return {
        ...state,
        friends
      };
    }
    case types.SET_FRIEND_SEX:
    {
      const friends = state.friends.map(e => ({...e}));
      const friend = friends.find(item => item.id === action.id);

      if (friend) {
        friend.sex = action.sex;
      }
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
