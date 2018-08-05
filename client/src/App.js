import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import HomepageLayout from './Pages/HomepageLayout';
//import Tournaments  from "./Pages/Tournaments";
// --> To Do   ---  Refactor to add header to another page and import here    
import About from "./Pages/About";
import { 
  Header, 
  Menu, 
  Container,
  Dropdown,
  Image,
 } from 'semantic-ui-react'


const image = require('./king.jpg');

class App extends Component {
  render() {
    return (
      <div className="App">
           <Header className="App-header">
          <Image src={image} className="App-logo"/>
          <h1 className="App-title">Correspondence Chess League of America</h1>
           "Serving the North America correspondence chess community since 1909"
        
        <Menu pointing secondary className="ccla-menu">
        <Menu.Item>  Home </Menu.Item>
     
        <Dropdown item simple text="CCLA Information">
          <Dropdown.Menu>
            <Dropdown.Item> Join CCLA </Dropdown.Item>
            <Dropdown.Item> Enter a Tournament </Dropdown.Item>
            <Dropdown.Item> Chess Correspondent Magazine </Dropdown.Item>  
            <Dropdown.Item> Newsletter </Dropdown.Item> 
            <Dropdown.Item> Constitution & Bylaws </Dropdown.Item>
            <Dropdown.Item> Using this Web Site </Dropdown.Item>
            <Dropdown.Item> Contacts </Dropdown.Item> 

          </Dropdown.Menu>
          </Dropdown>

           <Dropdown item simple text="Tournaments">
          <Dropdown.Menu>
            <Dropdown.Item> Tournament Descriptions </Dropdown.Item>
            <Dropdown.Item> Current Sections </Dropdown.Item>
            <Dropdown.Item> Tournament Archives </Dropdown.Item>  
            <Dropdown.Item> Server Team Championship </Dropdown.Item>  
            <Dropdown.Item> Download CCLA Server Games </Dropdown.Item>  
          </Dropdown.Menu>         
           </Dropdown>


           <Dropdown item simple text="Types of Play">
          <Dropdown.Menu>
            <Dropdown.Item> Postal </Dropdown.Item>
            <Dropdown.Item> Email </Dropdown.Item>
            <Dropdown.Item> Server </Dropdown.Item>  
          </Dropdown.Menu>
          </Dropdown>

           <Dropdown item simple text="Rules of Play">
          <Dropdown.Menu>
            <Dropdown.Item> Rating List </Dropdown.Item>
            <Dropdown.Item> Rated Results </Dropdown.Item>
            <Dropdown.Item> Rating Formula </Dropdown.Item>  
            <Dropdown.Item> ICCF Rules </Dropdown.Item>
            <Dropdown.Item> F.I.D.E. Laws of Chess </Dropdown.Item>
          </Dropdown.Menu>
          </Dropdown>


          
          <Dropdown item simple text="Ratings/Results">
          <Dropdown.Menu>
            <Dropdown.Item> CCLA Postal </Dropdown.Item>
            <Dropdown.Item> CCLA Server </Dropdown.Item>
            <Dropdown.Item> Adjudication </Dropdown.Item>  
            <Dropdown.Item> Grand Prix Points </Dropdown.Item>
          </Dropdown.Menu>
          </Dropdown>

        <Menu.Item > About </Menu.Item>
        
        </Menu>
        </Header>
        <Container>
          <Router>
         <Switch>
              
                <Route exact path="/about" component={About} />
                  <Route exact path ='/' component={Home} />
                  <Route exact path = '/homepagelayout' component={HomepageLayout} />
                
              
            </Switch>
            </Router>
        </Container>
                  
      
        

      </div>
    );
  }
}

export default App;
