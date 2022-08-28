import React from "react";
import Post from "./Post";
import "./Timeline.css";
import TweetBox from "./TweetBox";
import db from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

function Timeline() {
  const postDate = collection(db, "posts");
  // DocsはPromiseオブジェクト
  getDocs(postDate).then((querySnapshot) => {
    console.log(querySnapshot.docs.map((doc) => doc.data()));
  });

  return (
    <div className="timeline">
      {/* ヘッダー */}
      <div className="timeline__header">
        <h2>ホーム</h2>
      </div>
      {/* ツイートボックス */}
      <TweetBox />

      {/* 投稿要素（POST情報） */}
      <Post
        displayName="プログラミングチュートリアル"
        username="Shin_Engineer"
        verified={true}
        text="初めてのツイート"
        avatar="http://shincode.info/wp-content/uploads/2021/12/icon.png"
        image="https://source.unsplash.com/random"
      />
      {/* <Post /> */}
    </div>
  );
}

export default Timeline;
