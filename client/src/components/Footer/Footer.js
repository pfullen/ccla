import React, { Component } from "react";
import "./Footer.css";

import { Container} from 'semantic-ui-react';


var style = {
    backgroundColor: "black",
    //borderTop: "1px solid #E7E7E7",
    color: "white",
    textAlign: "center",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

var phantom = {
  display: 'inline',
  height: '60px',
  width: '100%',
}

class Footer extends Component {
    render() {
        return (
            <div>
            <div style={phantom}>
              <div style={style}>
                
                <Container classname="container" >
                <span>      Correspondence Chess League of America   &copy; 2018 </span>
        
                  <div class="text-center">
                    <a href="https://www.facebook.com/bootsnipp">
                      <i id="social-fb" class=" social fa fa-facebook-square fa-3x social" />
                    </a>
                    <a href="https://twitter.com/bootsnipp">
                      <i id="social-tw" class=" social fa fa-twitter-square fa-3x social" />
                    </a>
                    <a href="https://plus.google.com/+Bootsnipp-page">
                      <i id="social-gp" class="social fa fa-google-plus-square fa-3x social" />
                    </a>
                    <a href="mailto:#">
                      <i id="social-em" class="social fa fa-envelope-square fa-3x social" />
                    </a>
                  </div>
                </Container>
              </div>
            </div>
          </div>
        )
    }
}
    export default Footer;