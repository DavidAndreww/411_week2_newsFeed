import React from "react";

const Article = ({postData}) => {
  return (
    <div className='article'>
      <h5>{postData.title}</h5>
      <br />
      <p>{postData.author} | <span className="sub-text">Likes:{postData.points}</span></p>
    </div>
  );
};

export default Article;
