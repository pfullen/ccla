import React, { Component } from "react";
import { Container } from 'semantic-ui-react';
import './About.css'
class About extends Component {

    render() {
        return (
            <Container fluid className="about">
                <div>    
                <h1> Why CCLA? </h1>
                <p> Our non-profit organization has been conducting postal chess tournaments since 1897, 
                    as CCLA since 1909. We are a democratic organization operating under a member-approved
                     Constitution and ByLaws, with leadership provided by member-elected Officers and Directors,
                      all of whom have limited terms of office. Thus CCLA guarantees leadership continuity, 
                      avoiding the chaos that wipes-out small postal chess orgaizations when their owners become
                       unwilling or unable to continue.  We offer a large selection of server, 
                       email and postal chess tournaments, and publish the award-winning, quarterly Chess Correspondent magazine. In fact, the 
                       Chess Correspondent magazine has won the prestigious Chess Journalists of America award for best postal chess magazine a record six times! 
                       CCLA traditionally has a low drop-out rate so you are able to play most if not all of your games to completion. We cordially invite you to join us and enjoy the world of correspondence chess the CCLA way! </p>
        </div>


        <div className="whyCorrChess" >
                <h1> Why Correspondence Chess? </h1>
                <p> Do you dislike having to travel to chess tournaments, then pay high hotel
                     bills and entry fees for just a few games? Would you like more than the average
                      2 or 3 minutes for a move, so that you could really find the best move?

Correspondence chess offers you the opportunity to play chess in the comfort of your own home, at a 
time of your choosing, with very little expense and no chess clock staring you in the face. You can
 study the openings, middle games and endings in more detail, using books and data bases if you like,
  and improve your over-the-board skills as well. </p>
        </div>

        </Container>

        )  
    }
    
    
    
    
    }
    
    export default About;