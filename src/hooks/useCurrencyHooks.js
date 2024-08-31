import { useEffect, useState } from "react";

const useCurrencyHook = (currency) => {
  const [currencyData, setCurrencyData] = useState({});
  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
      .then(async (currencyData) => {
        return await currencyData.json();
      })
      .then((currency) => {
        setCurrencyData(currency["rates"]);
      })
      .catch((error) => {
        console.log("Error in fetching currency information");
      });
  }, [currency]);
  return currencyData;
};

export default useCurrencyHook;
