import React, { useState } from "react";

const TransferList = () => {
  const data = [
    { name: "item1", id: 1, checked: false },
    { name: "item2", id: 2, checked: false },
    { name: "item3", id: 3, checked: false },
    { name: "item4", id: 4, checked: false },
    { name: "item5", id: 5, checked: false },
    { name: "item6", id: 6, checked: false },
  ];
  const [leftList, setLeftList] = useState([...data]);
  const [rightList, setRightList] = useState([]);

  const uncheckListItems = (list) => {
    return list.map((item) => {
      return { ...item, checked: false };
    });
  };

  const handleSelect = (id, direction) => {
    if (direction === "LEFT") {
      const checkedList = leftList.map((item) => {
        if (item.id === id) {
          return { ...item, checked: !item.checked };
        } else {
          return { ...item };
        }
      });
      console.log(checkedList);
      setLeftList([...checkedList]);
    } else {
      const checkedList = rightList.map((item) => {
        if (item.id === id) {
          return { ...item, checked: !item.checked };
        } else {
          return { ...item };
        }
      });

      setRightList([...checkedList]);
    }
  };

  const handleClick = (direction) => {
    if (direction === "LEFT TO RIGHT") {
      let list = [...leftList];
      const checkedList = list.filter((item) => {
        return item.checked === true;
      });

      const uncheckedList = list.filter((item) => {
        return item.checked === false;
      });
      setRightList([...rightList, ...uncheckListItems(checkedList)]);
      setLeftList([...uncheckedList]);
    } else {
      let list = [...rightList];
      const checkedList = list.filter((item) => {
        return item.checked === true;
      });

      const uncheckedList = list.filter((item) => {
        return item.checked === false;
      });
      setLeftList([...leftList, ...uncheckListItems(checkedList)]);
      setRightList([...uncheckedList]);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Transfer List</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <div
          className="box"
          style={{
            border: "3px solid black",
            width: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {leftList.length > 0 &&
            leftList.map(({ name, id, checked }) => {
              return (
                <div
                  className="item"
                  id={id}
                  key={id}
                  onClick={() => {
                    handleSelect(id, "LEFT");
                  }}
                  style={{
                    display: "flex",
                    height: "30px",
                    backgroundColor: checked ? "black" : "green",
                    width: "50px",
                    gap: "10px",
                    margin: "10px",
                    padding: "5px",
                    color: "white",
                    borderRadius: "5px",
                  }}
                >
                  {name}
                </div>
              );
            })}
        </div>
        <div
          className="action"
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <div
            className="leftbtn"
            onClick={() => {
              handleClick("LEFT TO RIGHT");
            }}
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "gray",
              width: "90px",
              height: "40px",
              borderRadius: "5px",
              color: "white",
            }}
          >
            To Right
          </div>
          <div
            className="rgtbtn"
            onClick={() => {
              handleClick("RIGHT TO LEFT");
            }}
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "gray",
              width: "90px",
              height: "40px",
              borderRadius: "5px",
              color: "white",
            }}
          >
            To Left
          </div>
        </div>
        <div
          className="box"
          style={{
            border: "3px solid black",
            width: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {rightList.length > 0 &&
            rightList.map(({ name, id, checked }) => {
              return (
                <div
                  className="item"
                  id={id}
                  key={id}
                  onClick={() => {
                    handleSelect(id, "RIGHT");
                  }}
                  style={{
                    display: "flex",
                    height: "30px",
                    backgroundColor: checked ? "black" : "green",
                    width: "50px",
                    gap: "10px",
                    margin: "10px",
                    padding: "5px",
                    color: "white",
                    borderRadius: "5px",
                  }}
                >
                  {name}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default TransferList;
