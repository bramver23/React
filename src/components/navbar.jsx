import React, { Component } from 'react';

class navbar extends Component {
    render() { 
        return ( <nav className="navbar navbar-light reactnavbar">
        <a className="navbar-brand" href="#">MENU</a>
        <img className="onfLogoBlack" src={require("../images/onf.png")} ></img>
      </nav> );


    }
}
export default navbar;
