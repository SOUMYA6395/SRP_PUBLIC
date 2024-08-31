import React, { useState } from "react";

const BGChanger = () => {
  const [color, setColor] = useState("red");
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div
          style={{
            width: "300px",
            height: "200px",
            backgroundColor: color,
            borderRadius: "20px",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <button
            style={{
              backgroundColor: "red",
              width: "70px",
              height: "30px",
              borderRadius: "10px",
              color: "white",
            }}
            onClick={() => {
              setColor("red");
            }}
          >
            Red
          </button>
          <button
            style={{
              backgroundColor: "blue",
              width: "70px",
              height: "30px",
              borderRadius: "10px",
              color: "white",
            }}
            onClick={() => {
              setColor("blue");
            }}
          >
            Blue
          </button>
          <button
            style={{
              backgroundColor: "green",
              width: "70px",
              height: "30px",
              borderRadius: "10px",
              color: "white",
            }}
            onClick={() => {
              setColor("green");
            }}
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
};

export default BGChanger;
