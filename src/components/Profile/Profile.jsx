import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import styles from './Profile.module.css';
import ProfileInfo from './Profileinfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={styles.content}>
      <ProfileInfo
        isOwner={props.isOwner}
        savePhoto={props.savePhoto}
        profile={props.profile}
        status={props.status}
        updateUserStatus={props.updateUserStatus}
      />
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
