import React, { useRef, useEffect } from "react";

export default function RefComponent() {
  let ref = useRef(0);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleClick = () => {
    ref.current = ref.current + 1;
    alert(`You clickd ${ref.current} times`);
  };

  return (
    <div>
      <h2>useRef</h2>
      <h4>
        When you want a component to “remember” some information, but you don’t
        want that information to trigger new renders, you can use a ref.
      </h4>
      <button onClick={handleClick}>Click me</button>
      <br />
      <h4>
        When you want to access DOM elements, for example, to focus on the input
        field when the component mounts.
      </h4>
      <input ref={inputRef} type="text" />
    </div>
  );
}
