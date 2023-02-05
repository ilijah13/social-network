import axios from 'axios';
import React from 'react';
import styles from './Users.module.css';
import image from '../../assetc/images/ava.jpg';

const Users = (props) => {
  const { users, follow, unfollow, setUsers } = props;
  if (users.length === 0) {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => {
        setUsers(response.data.items);
      });
  }

  return (
    <div className={styles.users}>
      {users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img
                src={u.photos.small != null ? u.photos.small : image}
                alt="ava"
              ></img>
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{'u.location.country'}</div>
              <div>{'u.location.city'}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
