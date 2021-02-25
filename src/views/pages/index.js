import React from 'react';
import "../../stylesheets/views/Index.css";
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import PostButton from '../components/PostButton.js';

const Home = () => {
  return (
    <div>
      <Header>
        <PostButton />
      </Header>
      <div id="tmp">

      </div>
      <Footer />
    </div>
  );
};

export default Home;