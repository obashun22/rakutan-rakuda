import React from 'react';
import "../../stylesheets/components/Submit.css";

const Submit = (props) => {
  return (
    <input className="button submit-btn m-6" type="submit" value={ props.title }/>
  );
};

export default Submit;