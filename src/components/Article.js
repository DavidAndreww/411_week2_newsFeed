import React from "react";

const Article = ({postData}) => {
  return (
    <div>
      <h1>{postData.author}</h1>
      <p>{postData.title}</p>
    </div>
  );
};

export default Article;
