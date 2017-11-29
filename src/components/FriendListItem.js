import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import styles from './FriendListItem.css';

export default class FriendListItem extends Component {

  render() {
    return (
      <li className={styles.friendListItem}>
        <div className={styles.friendInfos}>
          <div>
            <span>{this.props.name}</span>
          </div>
          <div>
            <label className="radio-inline">
              <input 
                type="radio" 
                name={`sex_${this.props.id}`}
                checked={this.props.sex === 'm'}
                onChange={() => this.props.setFriendSex(this.props.id, 'm')} />
                Male
            </label>    
            <label className="radio-inline">
              <input 
                type="radio" 
                name={`sex_${this.props.id}`}
                checked={this.props.sex === 'f'}
                onChange={() => this.props.setFriendSex(this.props.id, 'f')} />
                Female
            </label>
          </div>
        </div>
        <div className={styles.friendActions}>
          <button className={`btn btn-default ${styles.btnAction}`}
                  onClick={() => this.props.starFriend(this.props.id)}>
            <i className={classnames('fa', {
              'fa-star': this.props.starred,
              'fa-star-o': !this.props.starred
            })} />
          </button>
          <button className={`btn btn-default ${styles.btnAction}`}
                  onClick={() => this.props.deleteFriend(this.props.id)}>
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  }

}

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  starred: PropTypes.bool,
  starFriend: PropTypes.func.isRequired,
  deleteFriend: PropTypes.func.isRequired,
  setFriendSex: PropTypes.func.isRequired
};
