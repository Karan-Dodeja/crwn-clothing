import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/naviagation.component";
import Home from "./routes/home/home.component";
import "./categories.styles.scss";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
