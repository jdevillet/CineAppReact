import React from "react";
import "./styles/main.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyPicks from "./pages/MyPicks";
import Error404 from "./pages/Error404";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mypicks" element={<MyPicks />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default App;
