import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectPage from "./components/ProjectPage";
import Blogs from "./components/Blogs";
import About from "./components/About";
import Contect from "./components/Contect";
import "./App.css";
import Main from "./components/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
          <Header/>
        <Switch>
          <Route exact path="/"><Main/></Route>
          <Route exact path="/Projects"><ProjectPage/></Route>
          <Route exact path="/Blogs"><Blogs/></Route>
          <Route exact path="/About"><About/></Route>
          <Route exact path="/Contect"><Contect/></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
