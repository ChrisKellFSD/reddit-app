import React from 'react';
import Badge from 'react-bootstrap/Badge';
import styles from '../styles/Post.module.css';
import moment from 'moment';
import Card from 'react-bootstrap/Card';

const Post = ({ post }) => {
  const { title, author, selftext, subreddit_name_prefixed, created_utc, thumbnail } = post.data;

  const badgeColors = {
    angular: 'danger',
    dotnet: 'primary',
    sql: 'success',
  };

  const subreddit = subreddit_name_prefixed.split('/')[1];
  const badgeColor = badgeColors[subreddit] || 'secondary';

  return (
    <Card className={styles.post}>
      {thumbnail && (
        <div className={styles.container}>
          <Card.Img className={styles.cardImg} variant="top" src={thumbnail} />
        </div>
      )}
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">
          Creation date & time: {moment.unix(created_utc).format('MMMM Do YYYY, h:mm:ss a')}
        </Card.Subtitle>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Author: {author}</Card.Subtitle>
        <Card.Text>{selftext}</Card.Text>
        <Badge bg={badgeColor}>Subreddit: {subreddit_name_prefixed}</Badge>
      </Card.Body>
    </Card>
  );
};

export default Post;
