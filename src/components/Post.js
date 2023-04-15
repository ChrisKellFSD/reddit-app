import React from 'react';
import moment from 'moment';
import Card from 'react-bootstrap/Card';

const Post = ({ post }) => {
    const { title, author, selftext, subreddit_name_prefixed, created_utc, thumbnail } = post.data;
  
    return (
      <Card>
        {thumbnail && <Card.Img variant="top" src={thumbnail} alt="thumbnail" />}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Author: {author}</Card.Subtitle>
          <Card.Text>{selftext}</Card.Text>
          <Card.Text>Subreddit: {subreddit_name_prefixed}</Card.Text>
          <Card.Text>Creation date & time: {moment.unix(created_utc).format('MMMM Do YYYY, h:mm:ss a')}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

export default Post;