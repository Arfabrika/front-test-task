import React, {useEffect, useState} from 'react';
import '../style/App.css'
import {postLoader} from "../dataLoader";
import Post from "./Post";

const PostList = ({person}) => {
  const [allPosts, setAllPosts] = useState([])
  const [userPosts, setUserPosts] = useState([])

  function findUserPosts() {
    const res = allPosts.filter(post => post.userId == person.id).slice(0,3);
    setUserPosts(res);
  }

  async function fetchPosts() {
    const response = await postLoader.getAllPosts();
    setAllPosts(response.data);
  }

  useEffect(()=> {
    fetchPosts();
  }, [person.id])

  useEffect(() => {
    findUserPosts();
  }, [allPosts])
  return (
    <div >
      {
        userPosts.length == 0
          ?
          <h1 className="post_header">No posts</h1>
          :
          <div >
            <h1 className="post_header">3 best posts of {person.name}</h1>
            <div className="post_list">
            {userPosts.map((post) =>
              <Post post={post} key={post.id}/>
            )}
            </div>
          </div>
      }
    </div>
  );
};

export default PostList;