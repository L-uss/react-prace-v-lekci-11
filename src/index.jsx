import React from "react";
import { render } from "react-dom";
import "./style.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import About from "./components/About";
import Home from "./components/Home"
import Contact from "./components/Contact";
import Product from "./components/Product";

/*const App = () => {
  return (
    <BrowserRouter>
      <h1>Práce v lekci 11</h1>
      <nav>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
        <Link to="/">Product</Link>
      </nav>

      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product' element={<Product/>}/>
      </Routes>
    </BrowserRouter>
  );
}*/

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Home</Link>
        |
        <Link to="/about">About</Link>
        |
        <Link to="/product">Products</Link>
        |
        <Link to="/contact">Contacts</Link>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

render(<App />, document.querySelector("#app"));
