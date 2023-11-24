// componentDidMount: Equivalent to useEffect with an empty dependency array.
// componentDidUpdate: Equivalent to useEffect with a dependency array.
// componentWillUnmount: Equivalent to returning a cleanup function from useEffect.

import React, { useState, useEffect } from "react";

export default function MyComponent(props) {
  const [counter, setCounter] = useState(0);

  // Equivalent to componentDidMount
  useEffect(() => {
    // Your code here
    console.log("component did mount");
    return () => {
      // Equivalent to componentWillUnmount
      // Cleanup code here
    };
  }, []); // Empty dependency array for componentDidMount

  // Equivalent to componentDidUpdate
  useEffect(() => {
    console.log("component did update");
  }, [counter]);

  return (
    <div>
      <button
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        {counter}
      </button>
      {counter <= 5 && <Title />}
    </div>
  );
}

function Title() {
  useEffect(() => {
    return () => {
      console.log("compent going to unmount.");
    };
  }, []); // Empty dependency array for componentDidMount

  return <h1>React lifecycle</h1>;
}
