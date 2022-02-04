import React, { useState } from 'react';

import "../../stylesheets/components/Post.css";
import kusa from "../../images/kusa/kusa.png";
import kusaWhite from "../../images/kusa/kusa_white.png";

import { updateLike } from '../../api/PostAPI';
import { useEffect } from 'react/cjs/react.development';

const Post = (props) => {
  const [post, setPost] = useState(props.post);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  useEffect(() => {
    // const count = post.like;
    const count = 10;
    setLikeCount(count);
    
    // 草のログを取得
    const likeLog = localStorage.getItem('like_log');
    let log = [];
    if (likeLog !== null) {
      log = JSON.parse(likeLog);
    } else {
      localStorage.setItem('like_log', JSON.stringify(log));
    }
    // if (log.includes(post.id)) { // 既に草を押しているか判定
    if (log.includes(0)) { // 既に草を押しているか判定
      setIsLiked(true);
    }
  }, [post]);
  return (
    <div id="post" className="card">
      <div className="columns is-marginless">
        {/* 情報 */}
        <div className="column is-3 px-5 py-4 info">
          {/* 授業情報 */}
          <div className="class-info">
            <h4 className="has-text-weight-bold is-size-6">
              <a onClick={ () => props.onClick(post.lecture) } >{ post.lecture }</a>
            </h4>
            <p className="property">
              <a onClick={ () => props.onClick(post.category) } >{ post.category }</a>／{post.year} { post.term }
            </p>
            <p className="teacher has-text-weight-bold mt-2">
              <a onClick={ () => props.onClick(post.teacher) } >{ post.teacher }</a>
            </p>
          </div>
          {/* 評価 */}
          <div className="review-info mt-4">
            <p className="evaluation">授業評価: <span className="review">{ post.evaluation }</span></p>
            <p className="cause">落単理由: <span className="review">{ post.cause }</span></p>
          </div>
        </div>

        {/* コメント */}
        <div className="column px-5 py-4 card-right">
          <div className="comment">
            <div className="comment-top">
              <h4 className="has-text-weight-bold is-size-6">コメント</h4>
              {/* 削除機能が必要になったら実装／ゴミ箱アイコンとアラート機能で確認 */}
              {/* <a className="killLinkStyle setting-icon"><span class="fas fa-ellipsis-h"></span></a> */}
            </div>
            <p className="my-1">{ post.comment }</p>
          </div>
          <div className="spacing" />
          <div className="action">
            <div className='kusa pt-1'>
              {
                isLiked ?
                  <img
                    src={kusa}
                    alt="kusa"
                    className='kusa-img kusa-anim'
                  />
                :
                  <img
                    src={kusaWhite}
                    alt="kusa white"
                    className='kusa-img is-clickable'
                    onClick={() => {
                      setIsLiked(true);
                      setLikeCount(likeCount + 1);

                      // 草のログを更新
                      let log = [];
                      const likeLog = localStorage.getItem('like_log');
                      if (likeLog !== null) {
                        log = JSON.parse(likeLog);
                        log.push(post.id);
                        localStorage.setItem('like_log', JSON.stringify(log));
                        updateLike(post.id); // データベース更新
                      } else {
                        log = [];
                        log.push(post.id);
                        localStorage.setItem('like_log', JSON.stringify(log));
                      }
                    }}
                  />
              }
              <p className='kusa-count pl-2'>{likeCount}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Post;