import React from 'react';

import classes from './Modal.css';

const modal = (props) => {
  return (
    <div className={classes.Modal}>
      <div className={classes.CloseButton}>
        <i className="fa fa-times" aria-hidden="true" style={{cursor: 'pointer'}}></i>
      </div>
      <div className={classes.Content}>
        {props.children}
      </div>
    </div>
  );
};

export default modal;