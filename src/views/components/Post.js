import React from 'react';
import "../../stylesheets/components/Post.css";

const Post = (props) => {
  const post = props.post;
  const evaluate = (evaluation) =>  {
    switch (evaluation) {
      case 0: return "最悪";
      case 1: return "悪い";
      case 2: return "普通";
      case 3: return "良い";
      case 4: return "最良";
      default: return "普通";
    }
  };
  const evaluation = evaluate(post.evaluation);
  return (
    <div id="post" className="card">

      <div className="columns is-marginless">
        {/* 情報 */}
        <div className="column is-3 px-5 py-4 info">
          {/* 授業情報 */}
          <div className="class-info">
            <h4 className="has-text-weight-bold is-size-6">
              <a>{ post.lecture }</a>
            </h4>
            <p className="property">
              <a>{ post.category }</a>／2020 秋
            </p>
            <p className="teacher has-text-weight-bold mt-2">
              <a>{ post.teacher }</a>
            </p>
          </div>
          {/* 評価 */}
          <div className="review-info mt-4">
            <p className="evaluation">内容: <span className="review">{ evaluation }</span></p>
            <p className="cause">原因: <span className="review">{ post.cause }</span></p>
          </div>
        </div>

        {/* コメント */}
        <div className="column px-5 py-4">
          <div className="comment">
            <div className="comment-top">
              <h4 className="has-text-weight-bold is-size-6">コメント</h4>
              {/* 削除機能が必要になったら実装しよう／ゴミ箱アイコンとアラート機能で確認 */}
              {/* <a className="killLinkStyle setting-icon"><span class="fas fa-ellipsis-h"></span></a> */}
            </div>
            <p className="my-1">{ post.comment }</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Post;