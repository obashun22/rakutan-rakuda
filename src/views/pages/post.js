import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Title from '../components/Title.js';
import Container from '../components/Container.js';

const Post = () => {
  return (
    <div>
      <Header />
      <Container>
        <Title content="落単情報登録" />
        <form className="columns">
          <div className="column">
            
          </div>
          <div className="column">

          </div>
        </form>
      </Container>
      <Footer />
    </div>
  );
};

export default Post;