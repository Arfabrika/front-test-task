import React from 'react';
import '../style/App.css'

const Post = ({post}) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <div className="post_body">{post.body}</div>
    </div>
  );
};

export default Post;