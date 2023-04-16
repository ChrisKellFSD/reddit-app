import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Post from '../pages/Post';

const PostList = ({ posts }) => {
  return (
    <Container>
      <Row xs={1} md={2} lg={3}>
        {posts.map((post, index) => (
          <Col key={index}>
            <Post post={post} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PostList;