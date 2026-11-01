import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import Contact from "./Contact";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;