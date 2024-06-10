
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  filter: 'all',
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, description, isDone } = action.payload;
      const existingTask = state.tasks.find(task => task.id === id);
      if (existingTask) {
        existingTask.description = description;
        existingTask.isDone = isDone;
      }
    },
    filterTasks: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, editTask, filterTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
