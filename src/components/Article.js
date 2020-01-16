import React from "react";

const Article = ({postData}) => {
  return (
    <div className='article'>
      <h3><a href={postData.url}>{postData.title}</a></h3>
      <br />
      <p>{postData.author} | <span className="sub-text">Likes:{postData.points}</span></p>
    </div>
  );
};

export default Article;
