import { useEffect } from 'react';
import { createConnection } from './ChatConnection2';

export default function ChatRoom2() {
  useEffect(() => {
    const connection = createConnection();
    connection.connect();

    return () => connection.disconnect();
  }, []);
  return <h1>Welcome to the chat!</h1>;
}
