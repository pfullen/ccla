import _ from "lodash";
import './Title.css';
import React, { Component } from "react";
import { render } from "react-dom";
import {
    Header,
} from "semantic-ui-react";

class Title extends Component {
    render() {
        return (
            <Header as='h1' inverted color='white'>
            Correspondence Chess League of America 
            </Header>  
        )
    }
}

export default Title;