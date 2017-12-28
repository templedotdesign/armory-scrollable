import React from 'react';

import classes from './ImageOverlay.css';

const imageOverlay = (props) => {
  let attachedClasses = [classes.ImageOverlay];
  if(props.visible === false) {
    attachedClasses.push(classes.Invisible);
  }
  return (
    <div className={attachedClasses.join(' ')}>
      <p>Click To View</p>
    </div>
  );
};

export default imageOverlay;