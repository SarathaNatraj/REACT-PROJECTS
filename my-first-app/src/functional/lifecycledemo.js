import React, { useEffect, useState } from "react";

function LifecycleDemo() {
  const [count, setCount] = useState(0);

  // 1️⃣ Mounting phase (runs once when component loads)
  useEffect(() => {
    console.log("Component Mounted");

    // 3️⃣ Unmounting phase (cleanup)
    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  // 2️⃣ Updating phase (runs when count changes)
  useEffect(() => {
    console.log("Component Updated: count =", count);
  }, [count]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>React Functional Component Lifecycle</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default LifecycleDemo;
