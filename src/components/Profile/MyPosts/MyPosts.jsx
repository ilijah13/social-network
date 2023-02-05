import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const { addPost, updateNewPostText, profilePage } = props;

  let onAddPost = () => {
    addPost();
  };
  let onPostChange = (e) => {
    let text = e.target.value;
    updateNewPostText(text);
  };

  return (
    <div className={styles.content}>
      <div className={styles.postsBlock}>
        <h3> My post</h3>
        <div>
          <div>
            <div>
              <textarea
                onChange={onPostChange}
                value={profilePage.newPostText}
              ></textarea>
            </div>
            <div>
              <button onClick={onAddPost}>Add post</button>
            </div>
          </div>
          {profilePage.posts.map((post) => {
            return (
              <Post
                key={post.id}
                id={post.id}
                message={post.message}
                likesCount={post.likesCount}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
