import React from 'react';
import './selected-input.css';

const SelectedInput = ({value, currentStage}) => {
  return (
    <div className="selected-input">
      <span>{`entry ${value}..`}</span>
      <span>{`stage-${currentStage} `}</span>
    </div>
  )
}

export default SelectedInput;
