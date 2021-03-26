import React from "react";

function Article(props) {
  return (
    <article class="articleLink">
      <a href={"https://reddit.com" + props.article.permalink} target="_blank">
        <h3>{props.article.title}</h3>
      </a>
    </article>
  );
}

export default Article;
