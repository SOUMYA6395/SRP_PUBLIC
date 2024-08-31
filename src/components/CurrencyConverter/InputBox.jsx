import React from "react";

const InputBox = ({
  label = "From",
  amount = 0,
  currencyType = "INR",
  onAmountChange,
  onCurrencyChange,
  options,
  isAmountDisabled,
}) => {
  return (
    <div
      style={{
        width: "500px",
        height: "150px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "grey",
      }}
    >
      <div
        style={{
          width: "45%",
          height: "100%",
          backgroundColor: "pink",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Amount</p>
        <input
          disabled={isAmountDisabled}
          type="number"
          value={amount}
          style={{ paddingLeft: "10px" }}
          onChange={(e) => {
            onAmountChange(e.target.value);
          }}
        />
      </div>
      <div
        style={{
          width: "45%",
          height: "100%",
          backgroundColor: "pink",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Currency</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={currencyType}
          onChange={(e) => {
            onCurrencyChange(e.target.value);
          }}
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
