import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { About } from "./pages/About";
import { Footer } from "./components/Footer";
import Fullpost from "./pages/Fullpost";
import NotFounf from "./pages/NotFounf";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<h2>Логин</h2>} />
        <Route path="/post/:id" element={<Fullpost />} />
        <Route path="*" element={<NotFounf />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
