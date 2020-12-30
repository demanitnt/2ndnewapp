import { render } from "@testing-library/react";
import React, { Component } from "react";

export default class Lobby extends Component {
constructor(props)
{
 super(props);
 this.state= { code: null };
 this.createRoom= this.createRoom.bind(this);
}

createRoom(){
    var randomV = Math.floor((Math.random() * 3000) + 1); 
    this.setState({code: randomV})
    this.props.history.push(`/playarea/${randomV}`);
}


    render() {
        
    return (
    <div className="home">
    <h4 className="playarea-header">Welcome to Rang Game Lobby</h4>
    <h1>{this.state.code}</h1>
    <button onClick={this.createRoom}>Create New Room</button>   
   </div>
    )
    }
    }