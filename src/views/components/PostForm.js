import React from 'react';
import "../../stylesheets/components/PostForm.css";
import Input from '../components/Input.js';
import Select from '../components/Select.js';
import Textarea from '../components/Textarea.js';
import Submit from '../components/Submit.js';

const Title = (props) => {
  const categories = ["全学教養科目", "理系基礎科目", "基礎セミナー"];
  const years = [2021, 2020, 2019, 2018];
  const terms = ["春学期", "秋学期", "その他"];
  return (
    <form>
      <div className="columns is-marginless mt-4">
        <div className="column">
          <Input label="講義名" placeholder="理系基礎科目" />
          <Input label="教員名" placeholder="落単太郎" />
          <Select label="授業区分" categories={ categories } />
          <Select label="開講年度" categories={ years } />
          <Select label="開講学期" categories={ terms } />
        </div>
        
        <div className="column">
          <Textarea placeholder="コメントを入力"/>
        </div>

      </div>
      <Submit title="登録する" />
    </form>
  );
};

export default Title;