import React, { Component } from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {Link} from 'react-router-dom'

class navbar extends Component {
    render() { 
        return ( 
                 <nav className="navbar navbar-light reactnavbar">
                   <div className="menuList ">
                      <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Works</Link></li>
                      </ul>
                    </div>
                    <img className="onfLogoBlack" src={require("../images/onf.png")} ></img>
                    <span className= "groupReserved btn ">{this.props.totalCounters} Group Reserved</span>
                </nav> 
                );
    }
}
export default navbar;
