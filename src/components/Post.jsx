import React from 'react';
import '../style/App.css'

const Post = ({post}) => {
  return (
    <div>
      <div className="post_title">{post.title}</div>
      <div className="post_body">{post.body}</div>
    </div>
  );
};

export default Post;