import React from 'react';

const Textarea = (props) => {
  return (
    <div className="field my-4">
      <div className="control">
        <textarea
          onChange={ props.onChange }
          className="textarea has-fixed-size"
          placeholder={ props.placeholder }
          rows="14" />
      </div>
    </div>
  );
};

export default Textarea;