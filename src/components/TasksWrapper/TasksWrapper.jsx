import React from 'react';
import Stage from '../Stage/';

const TasksWrapper = ({tasks, setSelectedTask}) => {
  const iceboxTasks = tasks.filter(t => t.stage === 1);
  const progressTasks = tasks.filter(t => t.stage === 2);
  const completedTasks = tasks.filter(t => t.stage === 3);

  return (
    <div
      style={{'padding': '20px',
        'margin': '30px',
        'border': '3px solid blue',
        'display': 'flex',
        'justifyContent': 'space-around'}}>
      <Stage
        style={{'color': 'red'}}
        name="icebox"
        tasks={iceboxTasks}
        setSelectedTask={setSelectedTask}/>
      <Stage
        style={{'color': 'purple'}}
        name="progress"
        tasks={progressTasks}
        setSelectedTask={setSelectedTask}/>
      <Stage
        style={{'color': 'orange'}}
        name="completed"
        tasks={completedTasks}
        setSelectedTask={setSelectedTask}/>
    </div>
  )
}

export default TasksWrapper;
