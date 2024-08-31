import React, { useEffect, useState } from "react";

const CountDownTimer = () => {
  const [isStart, setIsStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerInterval, setTimerInterval] = useState();

  // Input Handler
  const inputHandler = (e) => {
    let id = e.target.id;
    if (id == "hours") {
      setHours(e.target.value);
    } else if (id == "mins") {
      setMins(e.target.value);
    } else if (id == "secs") {
      setSeconds(e.target.value);
    }
  };
  // Handle Start Function
  let handleStart = (e) => {
    if (hours < 0 || mins < 0 || seconds <= 0) {
      alert("Invalid Input");
      return;
    }
    setIsStart(true);
    setIsPaused(false);
  };
  // Handle Reset Function
  const handleReset = () => {
    setIsStart(false);
    setIsPaused(false);
    clearInterval(timerInterval);
    setHours(0);
    setMins(0);
    setSeconds(0);
  };
  // Handle pause function
  let handlePause = () => {
    clearInterval(timerInterval);
    setIsStart(false);
    setIsPaused(true);
  };
  // UseEffect
  useEffect(() => {
    if (isStart) {
      let timerInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prev) => prev - 1);
        } else if (seconds === 0 && mins > 0) {
          setMins((prev) => prev - 1);
          setSeconds(59);
        } else if (mins == 0) {
          setHours((prev) => prev - 1);
          setMins(59);
          setSeconds(59);
        }
        if (hours === 0 && mins === 0 && seconds <= 0) {
          setHours(0);
          setMins(0);
          setSeconds(0);
          clearInterval(timerInterval);
          setIsStart(false);
        }
      }, 1000);
      setTimerInterval(timerInterval);
    }
    return () => {
      clearInterval(timerInterval);
    };
  }, [isStart, hours, mins, seconds]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        gap: "20px",
      }}
    >
      <h1>Count Down timer</h1>
      {!isStart && !isPaused && (
        <div
          className="input"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <input
            onChange={inputHandler}
            value={hours}
            type="number"
            id="hours"
            className="input-hr"
            placeholder="HH"
            style={{ width: "50px", height: "50px", border: "2px solid black" }}
          />
          <span style={{ fontWeight: "bold" }}>:</span>
          <input
            onChange={inputHandler}
            value={mins}
            type="number"
            id="mins"
            placeholder="MM"
            className="input-min"
            style={{ width: "50px", height: "50px", border: "2px solid black" }}
          />
          <span style={{ fontWeight: "bold" }}>:</span>
          <input
            onChange={inputHandler}
            value={seconds}
            type="number"
            id="secs"
            placeholder="SS"
            className="input-sec"
            style={{ width: "50px", height: "50px", border: "2px solid black" }}
          />
          <button
            className="start"
            onClick={(e) => {
              handleStart();
            }}
            style={{
              width: "50px",
              height: "30px",
              border: "2px solid black",
              borderRadius: "2px",
              backgroundColor: "slateblue",
              color: "white",
            }}
          >
            Start
          </button>
        </div>
      )}

      {(isStart || isPaused) && (
        <div
          className="timer"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div className="hr">{hours}</div>
            <span>:</span>
            <div className="min">{mins}</div>
            <span>:</span>
            <div className="sec">{seconds}</div>
          </div>
          <div className="pause-reset" style={{ display: "flex", gap: "20px" }}>
            {isStart ? (
              <button
                onClick={handlePause}
                style={{
                  width: "50px",
                  height: "30px",
                  border: "2px solid black",
                  borderRadius: "2px",
                  backgroundColor: "slateblue",
                  color: "white",
                }}
              >
                pause
              </button>
            ) : (
              <button
                onClick={handleStart}
                style={{
                  width: "50px",
                  height: "30px",
                  border: "2px solid black",
                  borderRadius: "2px",
                  backgroundColor: "slateblue",
                  color: "white",
                }}
              >
                restart
              </button>
            )}
            <button
              onClick={() => {
                handleReset();
              }}
              style={{
                width: "50px",
                height: "30px",
                border: "2px solid black",
                borderRadius: "2px",
                backgroundColor: "slateblue",
                color: "white",
              }}
            >
              reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountDownTimer;
