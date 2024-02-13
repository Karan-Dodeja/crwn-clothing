import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/naviagation.component";
import Home from "./routes/home/home.component";
import "./categories.styles.scss";
import { Authentication } from "./routes/authentication/authentication.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
