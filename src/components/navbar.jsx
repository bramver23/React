import React, { Component } from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

class navbar extends Component {
    render() { 
        return ( <nav className="navbar navbar-light reactnavbar">
                    <a className="navbar-brand title" href="#">MENU</a>
                    <img className="onfLogoBlack" src={require("../images/onf.png")} ></img>
                    <span className= "badge badge-success">{this.props.totalCounters}</span>
                </nav> );


    }
}
export default navbar;
