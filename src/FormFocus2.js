import { forwardRef, useRef } from 'react';

// ERROR
// function MyInput(props) {
//   return <input {...props} />;
// }

const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});

export default function FormFocus2() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
