import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Title from '../components/Title.js';
import Container from '../components/Container.js';
import TextContent from '../components/TextContent.js';

const Request = () => {
  return (
    <div>
      <Header />
      <Container>
        <Title title="削除依頼" />
        {/* 文を表示するのに適したコンポーネント */}
        <TextContent>
          <p>
            投稿の削除を希望する方は、以下の情報を記載の上、いずれかの連絡先に連絡してください。
          </p>
          <p>
            <ul>
              <li>削除する投稿を一意に特定できる情報（講義名／教員名に加えコメントの始め部分など）</li>
              <li>削除を希望する理由</li>
            </ul>
          </p>
          <p>
            連絡先：
            <ul>
              <li>obashun22＊yahoo.co.jp 宛てにメール（＊を@に置換）</li>
              <li>Twitterで @obashun22 宛てにDM</li>
            </ul>
          </p>
        </TextContent>
      </Container>
      <Footer />
    </div>
  );
};

export default Request;