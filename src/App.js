import React, { Component } from "react";
import "./App.css";
import { Router, Link } from "@reach/router";
import NavbarMain from "./components/Navbar";
import Home from "./pages/Home";
import Tour from "./pages/Tour";
import Login from "./components/Login";
class App extends Component{
  render() {
    return(
      <div className="App">
        <NavbarMain />
        <Router>
          <Home path="/" />
<Tour path ="tour" />
<Login path="/login" />
          
        </Router>
      </div>
      );
      }
      } 

export default App;
                          