import React, { useEffect, useState } from "react";
import Post from "./Post";
import "./Timeline.css";
import TweetBox from "./TweetBox";
import db from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

function Timeline() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postDate = collection(db, "posts");
    // DocsはPromiseオブジェクト
    getDocs(postDate).then((querySnapshot) => {
      // console.log(querySnapshot.docs.map((doc) => doc.data()));
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    });
    console.log("aaa");
  }, []);

  return (
    <div className="timeline">
      {/* ヘッダー */}
      <div className="timeline__header">
        <h2>ホーム</h2>
      </div>
      {/* ツイートボックス */}
      <TweetBox />

      {/* 投稿要素（POST情報） */}
      {posts.map((post) => (
        <Post
          key={post.text}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
      {/* <Post /> */}
    </div>
  );
}

export default Timeline;
