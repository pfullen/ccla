import React, { Component } from "react";
import { Container } from 'semantic-ui-react';
import './Home.css'
const image = require('../king.jpg');


class Logo extends Component {

    render() {
        return (
            <img src={image} size='small'/>
        )  
    }   
    }   
    export default Logo;
    