import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Professional from './components/Professional';
import BookService from './components/BookService';
import Payment from './components/Payment';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/professional" element={<Professional />}></Route>
          <Route exact path="/bookservice" element={<BookService />}></Route>
          <Route exact path="/payment" element={<Payment />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
