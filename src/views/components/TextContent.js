import React from 'react';
import "../../stylesheets/components/TextDeletion.css";

const TextContent = (props) => {
  return (
    <div className="text-content my-5 mx-1 has-text-left">
      { props.children }
    </div>
  );
};

export default TextContent;