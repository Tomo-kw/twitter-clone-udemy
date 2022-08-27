import React from "react";
import Post from "./Post";
import "./Timeline.css";
import TweetBox from "./TweetBox";

function Timeline() {
  return (
    <div className="timeline">
      {/* ヘッダー */}
      <div className="timeline__header">
        <h2>ホーム</h2>
      </div>
      {/* ツイートボックス */}
      <TweetBox />

      {/* 投稿要素（POST情報） */}
      <Post />
      <Post />
    </div>
  );
}

export default Timeline;
