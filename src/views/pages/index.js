import React from 'react';
import "../../stylesheets/views/Index.css";
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import PostButton from '../components/PostButton.js';
import Container from '../components/Container.js';
import Title from '../components/Title.js';

const Home = () => {
  return (
    <div>
      <Header>
        <PostButton />
      </Header>
      <div className="top">
        あああ
      </div>
      <div className="main">
        <Container>
          <Title title="検索結果" />
          <Title title="最近の投稿" />
        </Container>
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;