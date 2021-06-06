import React from 'react';
import './ImageCounter.css';

export function ImageCounter(props) {
  return (
    <div className="image-counter">
      <div className="count">{props.count}</div>
      <img src={props.imageUrl} onClick={props.onCount} alt="img"/>
    </div>
  );
}
;
