
import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import FilterTasks from './components/FilterTasks';

const App = () => {
  return (
    <div className="container">
      <h1>ToDo Application</h1>
      <AddTask />
      <FilterTasks />
      <ListTask />
    </div>
  );
};

export default App;
