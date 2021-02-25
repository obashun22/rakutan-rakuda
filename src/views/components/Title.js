import React from 'react';
import "../../stylesheets/components/Title.css";

const Title = (props) => {
  return (
    <h2 className="content-title is-size-3 is-size-5-mobile has-text-weight-semibold">
      { props.title }
    </h2>
  );
};

export default Title;