import React from "react";
import "./posts.css";
import Post from "../Post";

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post post={p}/>
      ))}
    </div>
  );
};

export default Posts;
