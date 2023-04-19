import './TaskApp.css';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';
import TasksProvider from './TasksContext';

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>Prague itinerary</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
