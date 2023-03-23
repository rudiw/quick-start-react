import './App.css';
import Gallery from './Gallery';
import { Profile } from './Profile';
import ToDoList from './ToDoList';
import PackingList from './PackingList';

function App() {
  return (
    <div>
      <Profile />
      <Gallery />
      <ToDoList />
      <PackingList />
    </div>
  );
}

export default App;
