
import React, { Component } from 'react';
import About from  './about.jsx'
import Projects from  './projects.jsx'
import { Switch, Route } from 'react-router-dom';
import {CSSTransition,TransitionGroup} from 'react-transition-group';

class Main extends Component {
    render() { 
        return ( 
            <Route render={({location})=>(
                <TransitionGroup>
                                <CSSTransition key ={location.key} timeout={300} classNames="fade">
                                    <Switch location={location}>
                                        <Route exact path="/Projects" component ={Projects}></Route>
                                        <Route path="/About" component ={About}></Route>
                                    </Switch>
                                </CSSTransition>
                </TransitionGroup>    
            )} />
         );
    }
}
export default Main