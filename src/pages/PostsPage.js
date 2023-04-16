import styles from '../styles/PostsPage.module.css';
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from './PostList';
import Spinner from 'react-bootstrap/Spinner';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [buttonState, setButtonState] = useState(false);

  const buttonStyle = {
    backgroundColor: '#38bfa5',
    color: 'white',
    borderColor: '#38bfa5'
  };

  const buttonHoverStyle = {
    backgroundColor: 'white',
    color: '#38bfa5',
    borderColor: '#38bfa5'
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const [angularData, dotnetData, sqlData] = await Promise.all([
        axios.get('https://www.reddit.com/r/angular.json'),
        axios.get('https://www.reddit.com/r/dotnet.json'),
        axios.get('https://www.reddit.com/r/sql.json'),
      ]);

      const allPosts = [
        ...angularData.data.data.children,
        ...dotnetData.data.data.children,
        ...sqlData.data.data.children,
      ];

      const sortedPosts = allPosts.sort(
        (a, b) => b.data.created_utc - a.data.created_utc
      );

      setPosts(sortedPosts);
      setLoading(false);
    };

    fetchData();
  }, []);

  const refreshPosts = async () => {
    setLoading(true);
    const [angularData, dotnetData, sqlData] = await Promise.all([
      axios.get('https://www.reddit.com/r/angular.json'),
      axios.get('https://www.reddit.com/r/dotnet.json'),
      axios.get('https://www.reddit.com/r/sql.json'),
    ]);

    const allPosts = [
      ...angularData.data.data.children,
      ...dotnetData.data.data.children,
      ...sqlData.data.data.children,
    ];

    const sortedPosts = allPosts.sort(
      (a, b) => b.data.created_utc - a.data.created_utc
    );

    setPosts(sortedPosts);
    setLoading(false);
  };

  const filteredPosts = posts.filter(post => post.data.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <Container>
      <div className={styles.HeadingContainer}>
        <h1>Reddit Posts</h1>
        <Button
          style={buttonState ? buttonHoverStyle : buttonStyle}
          onMouseOver={() => setButtonState(true)}
          onMouseOut={() => setButtonState(false)}
          onClick={refreshPosts}
        >
          Refresh Posts
        </Button>
      </div>
      <i className={`fas fa-search ${styles.SearchIcon}`} />
      <Form
        className={styles.SearchBar}
        onSubmit={(event) => event.preventDefault()}
      >
        <Form.Control
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          type="text"
          className="mr-sm-2"
          placeholder="Search post title"
        />
      </Form>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <PostList posts={filteredPosts} />
      )}
    </Container>
  );
};

export default PostsPage;
