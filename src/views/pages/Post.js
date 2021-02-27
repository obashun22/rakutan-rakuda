import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Title from '../components/Title.js';
import Container from '../components/Container.js';
import PostForm from '../components/PostForm.js';

const Post = () => {
  return (
    <div>
      <Header />
      <Container>
        <Title title="落単情報投稿" />
        <PostForm />
      </Container>
      <Footer />
    </div>
  );
};

export default Post;