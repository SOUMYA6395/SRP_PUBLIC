import React, { useState } from "react";
import InputBox from "./InputBox";
import useCurrencyHook from "../../hooks/useCurrencyHooks";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("INR");
  const [to, setTo] = useState("USD");
  const curencyInfo = useCurrencyHook(from);

  const options = Object.keys(curencyInfo);

  const convert = () => {
    setConvertedAmount(amount * curencyInfo[to]);
  };
  const swap = () => {
    let temp = from;
    setFrom(to);
    setTo(temp);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // flexDirection: "column",
        gap: "10px",
        backgroundColor: "",
      }}
    >
      <InputBox
        options={options}
        amount={amount}
        onAmountChange={(value) => {
          setAmount(value);
        }}
        currencyType={from}
        onCurrencyChange={(value) => {
          setFrom(value);
        }}
        isAmountDisabled={false}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <button
          style={{
            backgroundColor: "grey",
            width: "80px",
            height: "30px",
            color: "white",
            borderRadius: "10px",
          }}
          onClick={convert}
        >
          Convert
        </button>
        <button
          style={{
            backgroundColor: "grey",
            width: "80px",
            height: "30px",
            color: "white",
            borderRadius: "10px",
          }}
          onClick={swap}
        >
          Swap
        </button>
      </div>
      <InputBox
        options={options}
        amount={convertedAmount}
        onAmountChange={(value) => {
          setAmount(value);
        }}
        onCurrencyChange={(value) => {
          setTo(value);
        }}
        currencyType={to}
        isAmountDisabled={true}
      />
    </div>
  );
};

export default CurrencyConverter;
