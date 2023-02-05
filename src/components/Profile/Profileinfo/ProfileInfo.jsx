import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import styles from './ProfileInfo.module.css';
import ava from './../../../assetc/images/ava.jpg';

import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };
  return (
    <div>
      {/* <img
        src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
        alt="content_img"
      /> */}
      <div className={styles.descriptionBlock}>
        <img
          src={
            props.profile.photos.large === null
              ? ava
              : props.profile.photos.large
          }
          alt="ava"
        />
        {props.isOwner && <input type="file" onChange={onMainPhotoSelected} />}
        <ProfileStatusWithHooks
          status={props.status}
          updateUserStatus={props.updateUserStatus}
        />
        <div>{props.profile.fullName}</div>
        <div>
          Looking for a job:
          {props.profile.lookingForAJob ? ' yes' : ' no'}
          {props.profile.lookingForAJob && (
            <div>{props.profile.lookingForAJobDescription}</div>
          )}
        </div>
        <div>About me: {props.profile.aboutMe}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
