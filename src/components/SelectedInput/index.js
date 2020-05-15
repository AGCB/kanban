import React from 'react';
import './selected-input.css';

const SelectedInput = ({value, currentStage}) => {
  return (
    <div className="selected-input">
      <span>{`${value? 'Entry':''} ${value}..`}</span>
      <span>{`${value? 'stage':''}..${currentStage} `}</span>
    </div>
  )
}

export default SelectedInput;
