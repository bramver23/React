import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/navbar";
import Counters from './components/counters';

class  App extends Component{
    render(){
        return(
            <React.Fragment>
                <NavBar /> 
                <main className="container">
                    <Counters/>
                </main>    
            </React.Fragment>
        );
    }
}

export default App;
