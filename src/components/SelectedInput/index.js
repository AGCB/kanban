import React from 'react';

const SelectedInput = ({value, currentStage}) => {
  return (
    <div style={{'display': 'flex',
      'flexDirection': 'column',
      'margin': '30px',
      'fontSize': '30px'}}>
      <span>{`selected input...${value}..`}</span>
      <span>{'(click on specific tasks to update)'}</span>
      <span>{`it's currently at stage-${currentStage} `}</span>
    </div>
  )
}

export default SelectedInput;
