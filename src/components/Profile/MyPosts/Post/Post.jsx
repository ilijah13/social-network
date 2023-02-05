import React from 'react';
import styles from './Post.module.css';
const Post = (props) => {
  const { message, likesCount } = props;
  return (
    <div className={styles.item}>
      <img
        src="https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg"
        alt="ava"
      />
      {message}
      <div>
        <span>like</span>
        <span>{likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
