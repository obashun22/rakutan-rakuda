import React from 'react';

const Input = (props) => {
  return (
    <div className="field is-horizontal my-4">
      <div className="field-label is-normal">
        <label className="label">{ props.label }</label>
      </div>
      <div className="field-body">
        <div className="field">
          <div className="control">
            <input onChange={ props.onChange } className="input" type="text" placeholder={ props.placeholder } />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;