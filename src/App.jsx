import React from "react";
import "./app.css";
import { Header, Brands, WhatGPT3, Features, Possibilities, CTA, Blogs, Footer } from "./import.js";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Brands />
      <WhatGPT3 />
      <Features />
      <Possibilities />
      <CTA />
      <Blogs />
      <Footer />
    </div>
  );
};

export default App;
