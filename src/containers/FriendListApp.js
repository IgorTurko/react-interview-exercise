import React, { Component } from 'react';
import styles from './FriendListApp.css';
import { connect } from 'react-redux';

import { addFriend, deleteFriend, starFriend } from '../actions/FriendsActions';
import { setPage } from '../actions/PaginationActions';
import { FriendList, AddFriendInput, Pagination } from '../components';

class FriendListApp extends Component {

  render () {
    const { 
      friends,
      friendsByPage, 
      currentPage, 
      pageSize 
    } = this.props;

    const actions = {
      addFriend: this.props.addFriend,
      deleteFriend: this.props.deleteFriend,
      starFriend: this.props.starFriend,
      setPage: this.props.setPage
    };

    return (
      <div className={styles.friendListApp}>
        <h1>The FriendList</h1>
        <AddFriendInput addFriend={actions.addFriend} />
        <FriendList 
          friends={friendsByPage} 
          actions={actions} />
        <Pagination 
          currentPage={currentPage} 
          pageSize={pageSize} 
          totalCount={friends.length} 
          onChangePage={actions.setPage} />
      </div>
    );
  }
}

export default connect(state => {
  const { friendlist: { friends, currentPage } } = state;
  const pageSize = 2;
  
  return {
    friends,
    currentPage,
    pageSize,
    friendsByPage: friends.slice((currentPage - 1) * pageSize, currentPage * pageSize)
  };
}, {
  addFriend,
  deleteFriend,
  starFriend,
  setPage
})(FriendListApp)
