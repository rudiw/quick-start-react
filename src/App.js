import './App.css';
import Gallery from './Gallery';
import { Profile } from './Profile';
import ToDoList from './ToDoList';
import PackingList from './PackingList';
import List from './PeopleItem';

function App() {
  return (
    <div>
      <Profile />
      <Gallery />
      <ToDoList />
      <PackingList />
      <List />
    </div>
  );
}

export default App;
