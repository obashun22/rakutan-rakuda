import React from 'react';

const Select = (props) => {
  return (
    <div className="field is-horizontal my-4">
      <div className="field-label is-normal">
        <label className="label">{ props.label }</label>
      </div>
      <div className="field-body">
        <div className="field">
          <div className="control is-expanded">
            <div className="select is-fullwidth">
              <select onChange={ props.onChange }>
                {
                  // ここでclassとするとエラー吐くので命名には気を付ける
                  props.categories.map( (category, i) => {
                    return (
                      <option key={i}>{ category }</option>
                    )
                  })
                }
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select;