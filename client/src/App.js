import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Pages/Home';
import Footer from './components/Footer';

//import Poke from './pages/Pokemon';
import 'semantic-ui-css/semantic.min.css';
import NavBar from './components/NavBar'
import {Image, Header}  from "semantic-ui-react";

import './App.css';

const leftItems = [
  { as: "a", content: "Home", key: "home" },
  { as: "a", content: "CCLA Info", key: "info" },
  { as: "a", content: "Tournaments", key: "tournaments"},
  { as: "a", content: "Rules", key: "rules"}
  ];
  


class App extends Component {
  render() {
    return (
      <div>
      <Router>
      <div className="App">     
          <NavBar leftItems={leftItems} />
          
           <Switch>
             <div id="main">
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/info" component={Home} />
                <Route exact path="/tournaments" component={Home} />
                <Route exact path="/rules" component={Home} />                
              </div>
            </Switch>
      </div>
      </Router>
      <Footer/>
      </div>
    );
  }
}

export default App;
