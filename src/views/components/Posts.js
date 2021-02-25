import React from 'react';
import Post from '../components/Post.js';

const Posts = (props) => {
  return (
    <div className="mb-6">
      {
        props.posts.map( (post) => {
          return <Post post={ post } />
        })
      }
    </div>
  );
};

export default Posts;