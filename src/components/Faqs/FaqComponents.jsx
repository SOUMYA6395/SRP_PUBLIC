import { useEffect, useState } from "react";
import React from "react";

const FaqComponents = ({ faq, index }) => {
  const [isDisplay, setIsDisplay] = useState(false);
  useEffect(() => {
    if (index == 0) {
      setIsDisplay(true);
    }
  });
  const handleClick = () => {
    setIsDisplay((prev) => !prev);
  };
  return (
    <div
      style={{
        backgroundColor: "gray",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        className="que-button"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={handleClick}>More &gt;</button>
        <div className="que">{faq.question}</div>
      </div>
      {isDisplay && (
        <div className="ans" style={{ color: "white" }}>
          {faq.answer}
        </div>
      )}
    </div>
  );
};

export default FaqComponents;
