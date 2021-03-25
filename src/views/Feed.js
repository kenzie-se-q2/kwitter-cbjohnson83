import React from "react";
import { useState, useEffect } from "react";
import Article from "./Article";

export default function Feeds() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState("webdev");

  useEffect(() => {
    fetch("https://www.reddit.com/r/" + subreddit + ".json").then((res) => {
      if (res.status != 200) {
        console.log("Reddit Error");
        return;
      }

      res.json().then((data) => {
        if (data != null) {
          setArticles(data.data.children);
        }
      });
    });
  }, [subreddit]);

  //   const submit = ()

  return (
    <div className="Feed">
      <header className="Feed-header">
        <input
          type="text"
          className="input"
          value={subreddit}
          onChange={(e) => setSubreddit(e.target.value)}
        />
      </header>
      <div className="articles">
        {articles != null
          ? articles.map((articles, index) => (
              <Article key={index} article={articles.data} />
            ))
          : ""}
      </div>
    </div>
  );
}
