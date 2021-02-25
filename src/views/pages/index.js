import React from 'react';
import "../../stylesheets/views/Index.css";
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import PostPageButton from '../components/PostPageButton.js';
import Container from '../components/Container.js';
import Title from '../components/Title.js';
import Posts from '../components/Posts.js';

const Home = () => {
  const posts = [
    {
      lecture: "物理学基礎",
      teacher: "谷村省吾",
      category: "理系基礎科目",
      year: 2019,
      term: 2,
      evaluation: 2,
      cause: "テストでコケた",
      comment: "普通に難しい。微分積分モリモリ使うし正直しんどい。テストは甘めに見てくれたみたいだけどあと２点で落単。あまりお勧めはしないが物理が好きな人ならいいのかもあとテストにはちゃんと時計を持っていこう。普通に難しい。微分積分モリモリ使うし正直しんどい。テストは甘めに見てくれたみたいだけどあと２点で落単。あまりお勧めはしないが物理が好きな人ならいいのかもあとテストにはちゃんと時計を持っていこう。普通に難しい。微分積分モリモリ使うし正直しんどい。テストは甘めに見てくれたみたいだけどあと２点で落単。あまりお勧めはしないが物理が好きな人ならいいのかもあとテストにはちゃんと時計を持っていこう。"
    },
    {
      lecture: "微分積分学",
      teacher: "野村昌平",
      category: "理系基礎科目",
      year: 2020,
      term: 1,
      evaluation: 0,
      cause: "寝坊した",
      comment: "ちょっと難しい。微分積分モリモリ使うし正直しんどい。テストは甘めに見てくれたみたいだけどあと２点で落単。あまりお勧めはしないが物理が好きな人ならいいのかもあとテストにはちゃんと時計を持っていこう。普通に難しい。微分積分モリモリ使うし正直しんどい。テストは甘めに見てくれたみたいだけどあと２点で落単。あまりお勧めはしないが物理が好きな人ならいいのかもあとテストにはちゃんと時計を持っていこう。普通に難しい。微分積分モリモリ使うし正直しんどい。テストは甘めに見てくれたみたいだけどあと２点で落単。あまりお勧めはしないが物理が好きな人ならいいのかもあとテストにはちゃんと時計を持っていこう。"
    },
    {
      lecture: "物理学基礎",
      teacher: "谷村省吾",
      category: "理系基礎科目",
      year: 2019,
      term: 2,
      evaluation: 2,
      cause: "テストでコケた",
      comment: "普通に難しい。微分積分モリモリ使うし正直しんどい。テストは甘めに見てくれたみたいだけどあと２点で落単。あまりお勧めはしないが物理が好きな人ならいいのかもあとテストにはちゃんと時計を持っていこう。普通に難しい。微分積分モリモリ使うし正直しんどい。テストは甘めに見てくれたみたいだけどあと２点で落単。あまりお勧めはしないが物理が好きな人ならいいのかもあとテストにはちゃんと時計を持っていこう。普通に難しい。微分積分モリモリ使うし正直しんどい。テストは甘めに見てくれたみたいだけどあと２点で落単。あまりお勧めはしないが物理が好きな人ならいいのかもあとテストにはちゃんと時計を持っていこう。"
    },
  ];
  return (
    <div>
      <Header>
        <PostPageButton />
      </Header>
        <Container>
          <div className="top">
            <h2 className="catchphrase is-size-3 is-size-4-touch mb-6">
              その<span className="strong">落単</span>、<span className="strong">無駄</span>じゃない。
            </h2>
            <div className="search">
              <p className="precaution">
                ※当サイトは<a target="_blank" href="https://www.rakutan-rakuda.com/">楽単らくだ</a>
                のパロディサイトであり、楽単らくだとは一切の関係もありません。</p>
              <div id="search-bar" className="field has-addons">
                <div className="control is-expanded">
                  <input className="input" placeholder="講義名・教員名を検索" />
                </div>
                <div className="control">
                  <a className="button is-info">検索</a>
                </div>
              </div>
            </div>
          </div>
          <div className="result">
            <Title title="検索結果" />
            <Posts posts={ posts } />
          </div>
          <div className="recent-post">
            <Title title="最近の投稿" />
            <Posts posts={ posts } />
          </div>
        </Container>
      
      <Footer />
    </div>
  );
};

export default Home;