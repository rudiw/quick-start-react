import { useEffect, useState } from 'react';
import { createConnection } from './ChatConnection';

const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId }) {
  useEffect(() => {
    const con = createConnection(serverUrl, roomId);
    con.connect();
    return () => con.disconnect();
    // con.disconnect();
  }, [roomId]);

  return <h1>Welcome to the {roomId} room!</h1>;
}

export default function ChatRoomApp() {
  const [roomId, setRoomId] = useState('general');

  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <ChatRoom roomId={roomId} />
    </>
  );
}
