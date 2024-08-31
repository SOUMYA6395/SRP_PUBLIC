import React, { useEffect, useState } from "react";

const ShopingList = () => {
  const [item, setItem] = useState("");
  const [shoppingList, setShoppingList] = useState([]);
  const [shoppingKart, setShoppingKart] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const fetchItems = async (food) => {
    let url = `https://api.frontendeval.com/fake/food/${food}`;
    let items = await fetch(url);
    items = await items.json();
    setShoppingList(items);
  };

  useEffect(() => {
    if (item.length >= 2) {
      //Api call
      fetchItems(item);
    } else {
      setShoppingList([]);
    }
  }, [item]);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>My Shoping List</h1>
      {/* Input Box */}
      <div className="input">
        <input
          type="text"
          value={item}
          style={{ border: "2px solid black" }}
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
      </div>
      {/* Shopping List */}
      {shoppingList.length > 0 && (
        <div
          className="shopping-list"
          onClick={(e) => {
            const idx = e.target.getAttribute("idx");
            console.log(idx);
            const obj = {
              id: Date.now(),
              selectedItem: shoppingList[idx],
              isChecked: true,
            };
            setShoppingKart((prevKartItem) => {
              return [obj, ...prevKartItem];
            });
            setItem("");
          }}
        >
          {shoppingList.map((item, index) => (
            <div key={index} idx={index}>
              {item}
            </div>
          ))}
        </div>
      )}
      {/* Shopping kart  */}
      <div className="shoping-kart">
        <span>----------------------------</span>
        {shoppingKart.length > 0 &&
          shoppingKart.map((kartItem) => {
            return (
              <div
                key={kartItem.id}
                style={{
                  display: "Flex",
                  gap: "10px",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <input
                  type="checkbox"
                  defaultChecked={isChecked}
                  style={{
                    width: "20px",
                    height: "20px",
                    border: "1px solid black",
                  }}
                  onChange={(e) => {
                    setIsChecked((pre) => !pre);
                  }}
                />
                <div>{kartItem.selectedItem}</div>
                <button
                  style={{
                    backgroundColor: "grey",
                    color: "white",
                    height: "30px",
                    width: "100px",
                    borderRadius: "7px",
                    margin: "2px 2px",
                  }}
                  onClick={(e) => {
                    setShoppingKart((pre) => {
                      return pre.filter((ele) => {
                        return ele.id !== kartItem.id;
                      });
                    });
                  }}
                >
                  delete
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ShopingList;
