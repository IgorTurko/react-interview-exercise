import React, { Component } from 'react';
import styles from './FriendListApp.css';
import { connect } from 'react-redux';

import { addFriend, deleteFriend, starFriend, setFriendSex, setPage } from '../actions';
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
      setFriendSex: this.props.setFriendSex,
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
  const pageSize = 2;
  const totalPages = Math.ceil(friends.length / pageSize);
  let { friendlist: { friends, currentPage } } = state;
  

  if (currentPage > totalPages) {
    currentPage = totalPages;
  }

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
  setFriendSex,
  setPage
})(FriendListApp)
