import React from "react";

const Article = (props) => {
  return (
    <div>
      <h1>{props.author}</h1>
      <p>{props.title}</p>
    </div>
  );
};

export default Article;
