import React from 'react';
import SelectedInput from '../SelectedInput/';
import './controls.css';

const Controls = ({
  tasks,
  setTasks,
  handleMoveTask,
  selectedInput,
  setSelectedInput,
  deleteSelectedEntry }) => {
  // state
  const [ input, setInput ] = React.useState('placeholder')

  // helper functions
  const handleInputChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  }

  const handleFormSubmit = () => {
    let duplicateEntry = tasks.filter(task => task.value === input).length > 0;
    if(!duplicateEntry) {
      setTasks([...tasks, {value: input, stage: 1}])
      setSelectedInput(input);
      setInput('');
    } else {
      setInput('you have attempted a duplicate entry')
    }
  }

  const isSelectedInIceBox = tasks.filter(t => t.stage === 1)
    .filter(t => t.value === selectedInput).length > 0;
  const isSelectedInDone = tasks.filter(t => t.stage === 3)
    .filter(t => t.value === selectedInput).length > 0;
  const filteredTasks = tasks.filter(t => t.value === selectedInput)
  let stage = 'n/a';
  if (filteredTasks &&
      filteredTasks[0] &&
      filteredTasks[0].stage) {
        // optional chaining coming to js is so cool.
        // we get to reduce all of that to..
        // filtered[0]?.stage
        // actually... will it work with array indexing also?
        // like.... filtered?[0]?.stage ... research later...
    stage = filteredTasks[0].stage;
  }
  return (
    <div className="controls">

      <form onSubmit={(e) => {
          e.preventDefault();
          handleFormSubmit();
        }}>
        <input
          onFocus={(e) => setInput('')}
          onChange={(e) => handleInputChange(e)}
          value={input}/>
        <button type="submit"> addTask</button>
      </form>

      <SelectedInput value={selectedInput} currentStage = {stage}/>
      <button
        disabled={isSelectedInIceBox}
        onClick={(e) => {
          e.preventDefault();
          handleMoveTask(e,'left', selectedInput)
        }}>move left</button>
      <button
        disabled={isSelectedInDone}
        onClick={(e) => {
          e.preventDefault();
          handleMoveTask(e,'right', selectedInput);
        }}>move right</button>
      <button
        onClick={e => {
          e.preventDefault();
          deleteSelectedEntry()
        }}
      >REMOVE SELECTED ENTRY </button>

    </div>
  )
}

export default Controls;
