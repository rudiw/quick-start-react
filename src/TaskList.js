import { useState } from 'react';
import { useTasks, useTasksDispatch } from './TasksContext';

export default function TaskList() {
  const tasks = useTasks();
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task }) {
  const tasksDispatch = useTasksDispatch();
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            tasksDispatch({
              type: 'changed',
              task: { ...task, text: e.target.value },
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          tasksDispatch({
            type: 'changed',
            task: { ...task, done: e.target.checked },
          });
        }}
      />
      {taskContent}
      <button
        onClick={() =>
          tasksDispatch({
            type: 'deleted',
            id: task.id,
          })
        }
      >
        Delete
      </button>
    </label>
  );
}
