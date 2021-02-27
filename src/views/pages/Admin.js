import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getAllPosts } from '../../api/PostAPI.js';
import "../../stylesheets/views/Index.css";
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import PostPageButton from '../components/PostPageButton.js';
import Container from '../components/Container.js';
import Title from '../components/Title.js';
import Posts from '../components/Posts.js';

const Admin = () => {
  // 表示上限数
  const maxPosts = 100;

  // 投稿情報はuseStateで管理
  // API叩いた後はuseStateで保持
  const [posts, setPosts] = useState([]);

  // 初期読み込み／最新の投稿を取得
  useEffect(() => {
    getAllPosts()
      .then(res => {
        const posts = res.data.posts;
        if (posts.length > maxPosts) posts = posts.slice(0, maxPosts);
        setPosts(posts);
        console.log(posts);
      })
      .catch(err => {
        console.log("最近の投稿を取得時にエラー発生");
        console.log(err);
      })
  }, []);

  return (
    <div>
      <Header>
      </Header>
        <Container>
          <div className="recent-post">
            <Title title="最近の投稿" />
            <Posts onClick={ () => {} } posts={ posts || [] } />
          </div>
        </Container>
      
      <Footer />
    </div>
  );
};

export default Admin;