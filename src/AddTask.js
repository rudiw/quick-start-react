import { useState } from 'react';
import { useTasksDispatch } from './TasksContext';

let nextId = 3;

export default function AddTask({ onAddTask }) {
  const tasksDispatch = useTasksDispatch();
  const [text, setText] = useState('');
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText('');
          tasksDispatch({
            type: 'added',
            id: nextId++,
            text: text,
          });
        }}
      >
        Add
      </button>
    </>
  );
}
