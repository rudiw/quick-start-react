import './Carousel.css';
import { useRef } from 'react';

const xyz = {
  behavior: 'smooth',
  block: 'nearest',
  inline: 'center',
};

export default function CatFriends() {
  const cat1 = useRef(null);
  const cat2 = useRef(null);
  const cat3 = useRef(null);

  function handleScrollTo1() {
    cat1.current.scrollIntoView(xyz);
  }

  function handleScrollTo2() {
    cat2.current.scrollIntoView(xyz);
  }

  function handleScrollTo3() {
    cat3.current.scrollIntoView(xyz);
  }

  return (
    <>
      <nav>
        <button onClick={handleScrollTo1}>cat 1</button>
        <button onClick={handleScrollTo2}>cat 2</button>
        <button onClick={handleScrollTo3}>cat 3</button>
      </nav>
      <div>
        <ul>
          <li>
            <img src="https://placekitten.com/g/200/200" alt="1" ref={cat1} />
          </li>
          <li>
            <img src="https://placekitten.com/g/300/200" alt="2" ref={cat2} />
          </li>
          <li>
            <img src="https://placekitten.com/g/250/200" alt="3" ref={cat3} />
          </li>
        </ul>
      </div>
    </>
  );
}
