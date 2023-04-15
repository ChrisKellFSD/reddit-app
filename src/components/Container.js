import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from './PostList';

const Container = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
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
    };

    fetchData();
  }, []);

  const refreshPosts = async () => {
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
  };

  return (
    <div>
      <h1>Reddit Posts</h1>
      <Button variant="primary" onClick={refreshPosts}>Refresh Posts</Button>
      <PostList posts={posts} />
    </div>
  );
};

export default Container;