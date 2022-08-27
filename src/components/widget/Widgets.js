import Search from "@mui/icons-material/Search";
import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import "./Widget.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input placeholder="キーワード検索" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>いまどうしてる？</h2>

        {/* ライブラリを追加・追記 */}
        <TwitterTweetEmbed tweetId={"1168858027136450567"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="SplatoonJP"
          //   400効いてない
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://twitter.com/__tomotomon"}
          options={{ text: "#React.js勉強中", via: "__tomotomon" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
