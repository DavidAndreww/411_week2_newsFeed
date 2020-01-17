import React from "react";

const Article = ({postData}) => {
  return (
    <div className='article'>
      <h3><a href={postData.url} target="blank">{postData.title}</a></h3>
      <br />
      <p><span className="sub-text">Posted by: {postData.author} || Likes:{postData.points} || Date: {postData.created_at} ||</span></p>
    </div>
  );
};

export default Article;
