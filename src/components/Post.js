import React from 'react';
import styles from '../styles/Post.module.css';
import moment from 'moment';
import Card from 'react-bootstrap/Card';

const Post = ({ post }) => {
    const { title, author, selftext, subreddit_name_prefixed, created_utc, thumbnail } = post.data;
  
    return (
        <Card>
          {thumbnail && (
            <div className={styles.container}>
              <Card.Img className={styles.cardImg} variant="top" src={thumbnail} />
            </div>
          )}
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Author: {author}</Card.Subtitle>
            <Card.Text>{selftext}</Card.Text>
            <Card.Subtitle className="mb-2 text-muted">Subreddit: {subreddit_name_prefixed}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              Creation date & time: {moment.unix(created_utc).format('MMMM Do YYYY, h:mm:ss a')}
            </Card.Subtitle>
          </Card.Body>
        </Card>
      );
    };

export default Post;