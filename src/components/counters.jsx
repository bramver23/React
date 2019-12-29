import React, { Component } from "react";
import Counter from "./counter";
import "../css/video-react.css";
import "../css/logo.css";
import "../css/navbar.css";
import { Player } from 'video-react';
import { Button, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class Counters extends Component {
  
  
  LikesButton = () => (
    <div>
      <Button
        color='red'
        content='Like'
        icon='heart'
        label={{ as: 'a', basic: true, pointing: 'right', content: '23,055' }}
        labelPosition='left'
      />
    </div>
  )
  render() {
    return (
      <div className="d-block p-2 bg-dark text-white">
           <this.LikesButton className="likesbutton"/>
           <Player
              playsInline
              poster="/assets/poster.png"
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />

        
            <img className="onfLogo" src={require("../images/onf.png" )}></img>
            {this.props.counters.map(counter => (
              <Counter
                key={counter.id}
                //onDelete={this.handleDelete}
                onIncrement={this.props.onIncrement}
                onReset ={this.props.onReset}
                counter={counter}
              >
                <h1>Counter {counter.id} </h1>
              </Counter>
            ))}
        </div>
    );
  }
}

export default Counters;
