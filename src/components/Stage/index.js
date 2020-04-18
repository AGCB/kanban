import React from 'react';

const Stage = ({tasks, name, setSelectedTask}) => {
  const customColor = name === 'icebox' ? 'red' : name === 'progress' ? 'purple':'yellow'
  return (
    <div style={{'color': customColor, 'display': 'flex', 'flexDirection': 'column'}}>
    {
      tasks.map((task, i) => {
        return <span
          style={{
            'height': '30px',
            'border': '3px solid grey',
          }}key={i} onClick={(e) => {
            e.preventDefault();
            setSelectedTask(task.value)
          }}>{task.value}</span>
      })
    }
    </div>
  )
}

export default Stage;
