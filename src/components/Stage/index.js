import React from 'react';
import './stage.css';

const Stage = ({tasks, name, setSelectedTask}) => {
  const customColor = name === 'icebox' ? 'red' : name === 'progress' ? 'purple':'yellow'
  return (
    <div className="stage">
    {
      tasks.map((task, i) => {
        return <span
          className="task"
          key={i}
          onClick={(e) => {
            e.preventDefault();
            setSelectedTask(task.value)
          }}>{task.value}</span>
      })
    }
    </div>
  )
}

export default Stage;
