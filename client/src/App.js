import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/NavBar";
import Books from "./pages/Books";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Saved from "./pages/Saved";
// import Jumbotron from "./components/Jumbotron";
// import SearchForm from "./components/SearchForm";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Books} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/search" component={Books} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
