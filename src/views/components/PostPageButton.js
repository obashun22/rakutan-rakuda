import React from 'react';
import "../../stylesheets/components/PostPageButton.css"
import { Link } from 'react-router-dom';

const PostPageButton = () => {
  return (
    <div className="nav-right">
        <Link to="/Post" className="killLinkStyle btn">
          <span className="link-msg">＋</span>
        </Link>
    </div>
  );
};

export default PostPageButton;