import React, { useState, useEffect } from 'react';
import { getLatestPosts, getSearchPosts } from '../../api/PostAPI.js';
import "../../stylesheets/views/Index.css";
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import PostPageButton from '../components/PostPageButton.js';
import Container from '../components/Container.js';
import Title from '../components/Title.js';
import Posts from '../components/Posts.js';

const Home = () => {
  // 検索バーの下に表示する文字
  const guide = "過去に単位を落とした人の投稿を検索できます。";
  const alert = <span style={{color: "red"}}>条件に一致する投稿がありません。</span>;
  // アナウンスできるように創っておいたので広告等したい時は使ってね
  // const announce = "【お知らせ】落単してしまったそこの貴方、落単情報を投稿しませんか？";
  const announce = "";
  const maxPosts = 100;

  // 投稿情報はuseStateで管理
  // API叩いた後はuseStateで保持
  const [recentPosts, setRecentPosts] = useState([]);
  const [searchPosts, setSearchPosts] = useState([]);
  // 検索語彙を管理
  const [searchWord, setSearchWord] = useState('');
  // 検索バーのしたの文字を管理
  const [notion, setNotion] = useState(guide);

  // 初期読み込み／最新の投稿n件を取得／草のログを取得
  useEffect(() => {
    getLatestPosts()
      .then(res => {
        let posts = res.data.posts;
        if (posts.length > maxPosts) posts = posts.slice(0, maxPosts);
        setRecentPosts(posts);
      })
      .catch(err => {
        console.log("最近の投稿を取得時にエラー発生");
        console.log(err);
      })
  }, []);

  // 検索バーに入力されたらuseStateの値を更新
  const handleChange = (e) => {
    setSearchWord(e.target.value);
  };

  // 検索語彙で検索をかける
  const searchPost = (e) => {
    e.preventDefault();
    if (searchWord == "") {
      setNotion(guide);
      setSearchPosts([]);
      return;
    }
    getSearchPosts(searchWord)
      .then(res => {
        let posts = res.data.posts;
        if (posts.length > maxPosts) posts = posts.slice(0, maxPosts);
        setSearchPosts(posts);
        if (posts != 0) {
          // 検索結果がある場合
          // 通常の文に戻す
          setNotion(guide);
        } else {
          // 検索結果がない旨の文を表示
          setNotion(alert);
        }
        console.log(posts);
      })
      .catch(err => {
        console.log("検索内容を取得時にエラー発生");
        console.log(err);
      })
  };

  // 関連検索／講義名などをポチった時に検索できる機能
  const setKeywordAndSearch = (keyword) => {
    setSearchWord(keyword);
    getSearchPosts(keyword)
      .then(res => {
        let posts = res.data.posts;
        if (posts.length > maxPosts) posts = posts.slice(0, maxPosts);
        setSearchPosts(posts);
        if (posts != 0) {
          setNotion(guide);
        } else {
          setNotion(alert);
        }
        console.log(posts);
      })
      .catch(err => {
        console.log("検索内容を取得時にエラー発生");
        console.log(err);
      })
  };

  // 検索結果か最近の投稿を表示／初期状態や検索バーが空欄の時は最近の投稿を表示
  let mainContent = null;
  if (searchPosts.length) {
    mainContent = (
      <div className="result">
        <Title title="検索結果" />
        <Posts onClick={ setKeywordAndSearch } posts={ searchPosts || [] } />
      </div>
    );
  } else {
    mainContent = (
      <div className="recent-post">
        <Title title="最近の投稿" />
        <Posts onClick={ setKeywordAndSearch } posts={ recentPosts || [] } />
      </div>
    );
  }
  

  return (
    <div>
      <Header>
        {/* 投稿ページに遷移するためのボタン */}
        <PostPageButton />
      </Header>
        {/* 幅を調整してくれるやつ */}
        <Container>
          <div className="top">
            {/* キャッチフレーズ */}
            <h2 className="catchphrase is-size-3 is-size-4-touch mb-6">
              その<span className="strong">落単</span>、<span className="strong">無駄</span>じゃない。
            </h2>
            <div className="search">
              {/* 注意書き */}
              <p className="precaution">
                ※当サイトは<a target="_blank" href="https://www.rakutan-rakuda.com/">楽単らくだ</a>
                のパロディサイトであり、楽単らくだとは一切の関係もありません。</p>
              {/* 検索バー */}
              <form onSubmit={ searchPost } id="search-bar" className="field has-addons mb-0">
                <div className="control is-expanded">
                  <input onChange={ handleChange } value={ searchWord } className="input" placeholder="講義名・教員名を検索" />
                </div>
                <div className="control">
                  <a onClick={ searchPost } className="button is-info">検索</a>
                </div>
              </form>
              {/* ちょっとした文字とお知らせ */}
              <p className="precaution">
                { notion }
              </p>
              <p className="announce has-text-centered has-text-weight-bold is-size-7">
                { announce }
              </p>
              
            </div>
          </div>
          {/* 検索結果または最近の投稿 */}
          { mainContent }
        </Container>
      
      <Footer />
    </div>
  );
};

export default Home;