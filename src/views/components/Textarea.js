import React from 'react';

const Textarea = (props) => {
  return (
    <div class="field my-4">
      <div className="control">
        <textarea
          className="textarea has-fixed-size"
          placeholder={ props.placeholder }
          rows="10" />
      </div>
    </div>
  );
};

export default Textarea;