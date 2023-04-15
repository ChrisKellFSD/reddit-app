import React from 'react';
import moment from 'moment';

const Post = ({ post }) => {
  const { title, author, selftext, subreddit_name_prefixed, created_utc, thumbnail } = post.data;

  return (
    <div className="post">
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>Post text: {selftext}</p>
      <p>Subreddit: {subreddit_name_prefixed}</p>
      <p>Creation date & time: {moment.unix(created_utc).format('MMMM Do YYYY, h:mm:ss a')}</p>
      {thumbnail && <img src={thumbnail} alt="thumbnail" />}
    </div>
  );
};

export default Post;