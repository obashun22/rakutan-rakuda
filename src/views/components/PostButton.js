import React from 'react';
import "../../stylesheets/components/PostButton.css"
import { Link } from 'react-router-dom';

const PostButton = () => {
  return (
    <div className="nav-right">
        <Link to="/Post" className="killLinkStyle btn">
          <span className="link-msg">＋</span>
        </Link>
    </div>
  );
};

export default PostButton;