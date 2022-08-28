import React, { useEffect, useState } from "react";
import Post from "./Post";
import "./Timeline.css";
import TweetBox from "./TweetBox";
import db from "../../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

function Timeline() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postDate = collection(db, "posts");
    // Firestoreの関数を使って最新のツイート順に並び替え
    const q = query(postDate, orderBy("timestamp", "desc"));
    // DocsはPromiseオブジェクト
    getDocs(q).then((querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    });
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
