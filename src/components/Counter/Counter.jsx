import React, { useEffect } from "react";
import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((count) => {
      return (count += 1);
    });
  };
  const decrement = () => {
    setCount((count) => {
      return (count -= 1);
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <button
        onClick={() => {
          decrement();
        }}
      >
        -
      </button>
      <h1>{count}</h1>
      <button
        onClick={() => {
          increment();
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
