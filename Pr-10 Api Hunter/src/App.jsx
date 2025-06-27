import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Recipes from "./pages/Recipes";
import Users from "./pages/Users";
import Header from "./components/Header";

const App = () => {
  return (
   <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Recipes />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
