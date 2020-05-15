import React from 'react';
import './App.css';
import Controls from './components/Controls/';
import TasksWrapper from './components/TasksWrapper/';

function App() {
  //state
  const defaultTasks = [
    {value:'foo', stage: 1},
    {value:'bar', stage: 1},
    {value:'baz', stage: 2},
    {value:'fiz', stage: 3},
  ];
  const [ tasks, setTasks ] = React.useState(defaultTasks);
  const [ selectedInput, setSelectedInput ] = React.useState('')
  // helpers
  const handleMoveTask = (e, direction,input) => {
    e.preventDefault();
    let newTasks = [ ];
    tasks.forEach((task => {
      if (task.value === input ) {
        if(direction === 'left') {
          newTasks.push({value: input, stage: task.stage-1});
        } else if(direction === 'right') {
          newTasks.push({value: input, stage: task.stage+1});
        }
      } else {
        newTasks.push(task)
      }
    }))
    setTasks(newTasks);
  }

  const deleteSelectedEntry = () => {
    let newTasks = [];
    tasks.forEach(t => {
      if(t.value !== selectedInput) {
        newTasks.push(t);
      }
    })

      setTasks(newTasks);
      setSelectedInput('n/a')
  }

  return (
    <div className="App">
      <h1>Kanban</h1>
      <Controls
        handleMoveTask={handleMoveTask}
        tasks={tasks}
        setTasks={setTasks}
        selectedInput={selectedInput}
        setSelectedInput={setSelectedInput}
        deleteSelectedEntry = {deleteSelectedEntry}/>
      <div className="kanban">
        {
          ['icebox', 'progress', 'done'].map((stage,i) => {
            return (
              <span style={{"color":"yellow"}}key={i}>{stage}</span>
            )
          })
        }
        </div>
      <TasksWrapper
        tasks={tasks}
        setSelectedTask={setSelectedInput}
      />
    </div>
  );
}

export default App;
