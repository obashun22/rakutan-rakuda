import React from 'react';

const Input = (props) => {
  return (
    <div className="field is-horizontal my-4">
      <div className="field-label is-normal">
        <label class="label">{ props.label }</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div className="control">
            <input class="input" type="text" placeholder={ props.placeholder } />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;