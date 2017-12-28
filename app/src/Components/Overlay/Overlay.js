import React from 'react';

import classes from './Overlay.css';

const overlay = (props) => {
  let attachedClasses = [classes.Overlay]
  if(props.visible === false) {
    attachedClasses.push(classes.Invisible);
  }
  return (
    <div className={attachedClasses.join(' ')} onClick={props.clicked}>
      {props.children}
    </div>
  );
};

export default overlay;