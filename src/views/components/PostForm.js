import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import "../../stylesheets/components/PostForm.css";
import { postNewPost } from '../../api/PostAPI.js';
import Input from '../components/Input.js';
import Select from '../components/Select.js';
import Textarea from '../components/Textarea.js';
import Submit from '../components/Submit.js';

const Title = (props) => {
  // formの入力に必要な情報を初期化
  const categorieOptions = ["全学教養科目", "文系教養科目", "理系教養科目", "文系基礎科目", "理系基礎科目", "理系基礎（文系）", "理系基礎（理系）", "言語文化I", "言語文化II", "言語文化III", "基礎セミナー", "健康・スポーツ科学", "開放科目", "専門科目", "文学部専門科目", "教育学部専門科目", "法学部専門科目", "経済学部専門科目", "情報学部専門科目", "情報文化学部専門科目", "理学部専門科目", "医学部専門科目", "工学部専門科目", "農学部専門科目", "大学院", "不明", "その他"];
  const yearOptions = [];
  // 最新の年度を先頭にする
  let date = new Date();
  date.setMonth(date.getMonth() - 3);
  const thisYear = date.getFullYear();
  for (let i = thisYear; i > 2018; i--) yearOptions.push(i);
  const termOptions = ["春", "秋", "その他"];
  const evaluationOptions = ["最悪", "悪い", "普通", "良い", "最良"];
  const causeOptions = ["勉強不足", "内容が難しかった", "テストでコケた", "提出物を出していない", "出席が足りなかった", "やむを得ない事情", "不明", "その他"]
  const deficiencyMsg = "入力内容に不備があります。すべての欄に記入してください。";
  const postErrorMsg = "登録に失敗しました。再度登録してください。";

  // 入力内容は常にuseStateで管理／axiosでPostする際に便利
  const [lecture, setLecture] = useState('');
  const [teacher, setTeacher] = useState('');
  const [category, setCategory] = useState(categorieOptions[0]);
  const [year, setYear] = useState(yearOptions[0]);
  const [term, setTerm] = useState(termOptions[0]);
  const [evaluation, setEvaluation] = useState(evaluationOptions[0]);
  const [cause, setCause] = useState(causeOptions[0]);
  const [comment, setComment] = useState('');
  // エラー文を管理
  const [error, setError] = useState('');

  // デバッグ用／入力状態をチェックできる
  // useEffect(() => {
  //   console.log(lecture);
  //   console.log(teacher);
  //   console.log(category);
  //   console.log(year);
  //   console.log(term);
  //   console.log(comment);
  //   console.log(evaluation);
  //   console.log(cause);
  // }, [lecture, teacher, category, year, term, comment, evaluation, cause]);

  // 登録処理／サーバにPostする
  const submit = (e) => {
    // 画面遷移するのを防止
    e.preventDefault();
    // 空の時はエラー文
    if (lecture == "" || teacher == "" || comment == "") {
      setError(deficiencyMsg);
      return;
    }
    // Post処理
    postNewPost(lecture, teacher, category, year, term, comment, evaluation, cause)
    .then((res) => {
      if (res.status == 200) {
        // エラー文を消す
        setError('');
        console.log("Post was Succeeded!!");
        // ホームに戻る
        props.history.push('/');
      } else {
        setError(postErrorMsg);
      }
      })
      .catch((err) => {
        console.log("投稿登録時にエラー発生");
        console.log(err);
        setError(postErrorMsg);
      })
  };

  return (
    <form onSubmit={ submit }>
      <div className="columns is-marginless mt-4">
        <div className="column">
          {/* 入力された時に各set*を実行してuseStateを最新にする */}
          <Input onChange={ (e) => setLecture(e.target.value) } label="講義名" placeholder="例: 情報リテラシー" />
          <Input onChange={ (e) => setTeacher(e.target.value) } label="教員名" placeholder="例: 落単太郎" />
          <Select onChange={ (e) => setCategory(e.target.value) } label="授業区分" categories={ categorieOptions } />
          <Select onChange={ (e) => setYear(e.target.value) } label="開講年度" categories={ yearOptions } />
          <Select onChange={ (e) => setTerm(e.target.value) } label="開講学期" categories={ termOptions } />
          <Select onChange={ (e) => setEvaluation(e.target.value) } label="評価" categories={ evaluationOptions } />
          <Select onChange={ (e) => setCause(e.target.value) } label="落単理由" categories={ causeOptions } />
        </div>
        
        <div className="column">
          <Textarea onChange={ (e) => setComment(e.target.value) } placeholder="コメントを入力"/>
        </div>

      </div>
      <p className="post-error">{ error }</p>
      <Submit title="登録する" />
    </form>
  );
};

export default withRouter(Title);