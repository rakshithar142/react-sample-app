import React, { useState, useEffect } from "react";

function FunctionalComponent() {
  // State for the component
  const [count, setCount] = useState(0);

  // Mounting Phase - Equivalent to componentDidMount
  useEffect(() => {
    console.log("Component Did Mount");

    // Cleanup logic for componentWillUnmount
    return () => {
      console.log("Component Will Unmount");
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  // Updating Phase - Equivalent to componentDidUpdate
  useEffect(() => {
    console.log("Component Did Update");

    // Simulate some asynchronous operation
    const fetchData = async () => {
      try {
        // Simulate an API call
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        const data = await response.json();
        console.log("Data fetched:", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the async function to simulate an API request

    // Cleanup logic when specific dependency (`count`) changes
    return () => {
      console.log("Cleaning up effect");
    };
  }, [count]); // Runs when `count` changes

  // Event handler to update the state
  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Functional Component with useEffect</h1>
      <p>Count: {count}</p>
      <button onClick={handleButtonClick}>Increment Count</button>
    </div>
  );
}

export default FunctionalComponent;
