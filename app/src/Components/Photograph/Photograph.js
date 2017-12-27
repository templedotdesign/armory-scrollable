import React from 'react';

const photograph = (props) => {
  return (
    <div className='Photograph'>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img src={props.src} alt={props.alt}/>
      </div>
      <p>{props.caption}</p>
    </div>
  );
};

export default photograph;