
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(addTask({ id: uuidv4(), description, isDone: false }));
    setDescription('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add new task..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
