import React from 'react';
import Stage from '../Stage/';
import './tasks-wrapper.css';

const TasksWrapper = ({tasks, setSelectedTask}) => {
  const iceboxTasks = tasks.filter(t => t.stage === 1);
  const progressTasks = tasks.filter(t => t.stage === 2);
  const completedTasks = tasks.filter(t => t.stage === 3);

  return (
    <div className="tasks-wrapper">
      <Stage
        name="icebox"
        tasks={iceboxTasks}
        setSelectedTask={setSelectedTask}/>
      <Stage
        name="progress"
        tasks={progressTasks}
        setSelectedTask={setSelectedTask}/>
      <Stage
        name="completed"
        tasks={completedTasks}
        setSelectedTask={setSelectedTask}/>
    </div>
  )
}

export default TasksWrapper;
