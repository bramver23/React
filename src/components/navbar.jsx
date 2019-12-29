import React, { Component } from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {Link} from 'react-router-dom'
import { Button, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class navbar extends Component {
  CartButton = () => (
    <div>
      <Button animated='vertical'>
        <Button.Content hidden className="shopNow">Buy Now</Button.Content>
        <Button.Content visible> 
          <Icon name='shop' />{this.props.totalCounters}
        </Button.Content>
      </Button>
    </div>
  )

    render() { 
        return ( 
                 <nav className="navbar navbar-light reactnavbar">
                   <div className="menuList ">
                      <ul>
                        <li><Link to="/about"><span className="aboutBtn">About</span></Link></li>
                        <li><Link to="/projects"><span className="aboutBtn">Works</span></Link></li>
                      </ul>
                    </div>
                    <img className="onfLogoBlack" src={require("../images/onf.png")}></img>

                    <this.CartButton>
                    <span className= "groupReserved btn badge badge-light">{this.props.totalCounters} Group Reserved</span>
                    </this.CartButton>

                </nav> 
                );
    }
}
export default navbar;
