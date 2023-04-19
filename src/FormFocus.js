import { useRef } from 'react';

export default function FormFocus() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Click me!</button>
    </>
  );
}
