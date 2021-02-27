import React from 'react';
import "../../stylesheets/components/Footer.css";
import { Link } from 'react-router-dom';

const Footer = (props) => {
  return (
  <footer>
    <div className="container is-max-widescreen">
      <nav className="">
        <Link to="/" className="killLinkStyle has-text-white">
          ホーム
        </Link>
        <Link to="/Request" className="killLinkStyle has-text-white">
          削除依頼
        </Link>
        <a
          target="_blank"
          href="https://terms-page.netlify.app/ja/privacy?company=落単らくだ"
          className="killLinkStyle has-text-white">
          プライバシーポリシー
        </a>
        <a href="mailto:obashun22&#64;yahoo.co.jp" className="killLinkStyle has-text-white">
          お問い合わせ
        </a>
      </nav>
      <p>©2021 ︎shunsuke oba</p>
    </div>
  </footer>
  );
};

export default Footer;