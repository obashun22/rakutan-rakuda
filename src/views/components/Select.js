import React from 'react';

const Select = (props) => {
  return (
    <div className="field is-horizontal my-4">
      <div className="field-label is-normal">
        <label class="label">{ props.label }</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div className="control is-expanded">
            <div className="select is-fullwidth">
              <select name="">
                {
                  props.categories.map( (category) => {
                    return (
                      <option>{ category }</option>
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