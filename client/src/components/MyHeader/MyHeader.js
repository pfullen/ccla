
import _ from "lodash";
import './MyHeader.css';
import React, { Component } from "react";
import { render } from "react-dom";
import {
    Header,
    Seegment,
} from "semantic-ui-react";

class MyHeader extends Comment {
    render() {
        return (
            <Segment inverted>
            <Header as='h1' inverted color='gray' id ="my-header" >
            Correspondence Chess League of America 
            </Header>
            </Segment>  
        )
    }
}

export default MyHeader;