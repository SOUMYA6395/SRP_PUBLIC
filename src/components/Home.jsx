import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div
      className="main-div"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="container" style={{ width: "100%", height: "100%" }}>
        <div
          className="header"
          style={{ width: "100%", height: "10%", backgroundColor: "grey" }}
        ></div>
        <div
          className="main-body"
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="links"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Link to={"/counter"}>
              <button
                style={{
                  height: "30px",
                  borderRadius: "10px",
                  border: "1px solid black",
                }}
              >
                Count The Number
              </button>
            </Link>
            <Link to={"/bg"}>
              <button
                style={{
                  height: "30px",
                  borderRadius: "10px",
                  border: "1px solid black",
                }}
              >
                Change Background
              </button>
            </Link>
            <Link to={"/password-generator"}>
              <button
                style={{
                  height: "30px",
                  borderRadius: "10px",
                  border: "1px solid black",
                }}
              >
                Generate Password
              </button>
            </Link>
            <Link to={"/currency-converter"}>
              <button
                style={{
                  height: "30px",
                  borderRadius: "10px",
                  border: "1px solid black",
                }}
              >
                Convert Currency
              </button>
            </Link>
            <Link to={"/todo-app"}>
              <button
                style={{
                  height: "30px",
                  borderRadius: "10px",
                  border: "1px solid black",
                }}
              >
                Maintain Your ToDo
              </button>
            </Link>
            <Link to={"/shoping-list"}>
              <button
                style={{
                  height: "30px",
                  borderRadius: "10px",
                  border: "1px solid black",
                }}
              >
                Shoping List
              </button>
            </Link>
            <Link to={"/timer"}>
              <button
                style={{
                  height: "30px",
                  borderRadius: "10px",
                  border: "1px solid black",
                }}
              >
                timer
              </button>
            </Link>
            <Link to={"/faqs"}>
              <button
                style={{
                  height: "30px",
                  borderRadius: "10px",
                  border: "1px solid black",
                }}
              >
                faqs
              </button>
            </Link>
            <Link to={"/transfer-list"}>
              <button
                style={{
                  height: "30px",
                  borderRadius: "10px",
                  border: "1px solid black",
                }}
              >
                Transfer List
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
