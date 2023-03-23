import './App.css';
import Gallery from './Gallery';
import { Profile } from './Profile';
import ToDoList from './ToDoList';
import Avatar from './Avatar';

function App() {
  return (
    <div>
      <Profile />
      <Gallery />
      <ToDoList />
      <Avatar />
    </div>
  );
}

export default App;
