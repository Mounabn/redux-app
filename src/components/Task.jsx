
import React from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/tasksSlice';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(editTask({ ...task, isDone: !task.isDone }));
  };

  const handleEdit = (e) => {
    dispatch(editTask({ ...task, description: e.target.value }));
  };

  return (
    <div className="task">
      <input
        type="text"
        value={task.description}
        onChange={handleEdit}
      />
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggle}
      />
    </div>
  );
};

export default Task;
