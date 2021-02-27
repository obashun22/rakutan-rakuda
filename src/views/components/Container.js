import React from 'react';
import "../../stylesheets/components/Container.css";

const Container = (props) => {
  return (
    <div className="section">
      <div className="container is-max-widescreen">
        <div className="container-min-height">
          { props.children }
        </div>
      </div>
    </div>
  );
};

export default Container;