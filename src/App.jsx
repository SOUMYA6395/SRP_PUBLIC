import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from "./components/Counter/Counter";
import BGChanger from "./components/BGChanger/BGChanger";
import PasswordGenerator from "./components/PasswordGenerator/PasswordGenerator";
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter";
import MainTodo from "./components/Todo/MainTodo";
import ShopingList from "./components/ShopingList/ShopingList";
import CountDownTimer from "./components/count-down-timer/CountDownTimer";
import Faqs from "./components/Faqs/Faqs";
import TransferList from "./components/TransferList/TransferList";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/bg" element={<BGChanger />} />
          <Route path="/password-generator" element={<PasswordGenerator />} />
          <Route path="/currency-converter" element={<CurrencyConverter />} />
          <Route path="/todo-app" element={<MainTodo />} />
          <Route path="/shoping-list" element={<ShopingList />} />
          <Route path="/timer" element={<CountDownTimer />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/transfer-list" element={<TransferList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
