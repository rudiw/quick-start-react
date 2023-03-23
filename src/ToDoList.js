export default function TodoList() {
  const today = new Date();
  function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
  }

  const person = {
    name: 'Gregorio Y. Zara',
    theme: {
      backgroundColor: 'black',
      color: 'pink',
    },
  };
  return (
    <>
      <h1>
        {person.name}'s To Do List for {formatDate(today)}
      </h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul style={person.theme}>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
}
