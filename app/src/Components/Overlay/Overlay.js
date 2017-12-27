import React from 'react';

const overlay = (props) => {
  let attachedClasses = ['Overlay']
  if(props.visible === false) {
    attachedClasses.push('Invisible');
  }
  return (
    <div className={attachedClasses.join(' ')} onClick={props.clicked}>
      {props.children}
    </div>
  );
};

export default overlay;