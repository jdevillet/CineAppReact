import React, { useState, useEffect } from "react";
import "./styles/main.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyPicks from "./pages/MyPicks";
import Error404 from "./pages/Error404";

const App = () => {
  const [picksList, setPicksList] = useState(() => {
    const saved = localStorage.getItem("picksList");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("picksList", JSON.stringify(picksList));
  }, [picksList]);

  return (
    <Routes>
      <Route
        path="/"
        element={<Home picksList={picksList} setPicksList={setPicksList} />}
      />
      <Route
        path="/mypicks"
        element={<MyPicks picksList={picksList} setPicksList={setPicksList} />}
      />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default App;
