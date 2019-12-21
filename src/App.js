import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/navbar";
import Counters from './components/counters';

class  App extends Component{

    state = {
        counters: [
          { id: 1, value: 0 },
        ]
      };
    
      handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        let update = this.setState({ counters });
        console.log(update);
      };
    
      handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters: counters });
        // console.log("Handler Called", counterId);
      };
    
      handleReset = () =>{
        const counters = this.state.counters.map(a =>{
          a.value = 0;
          return a;
        })
        this.setState({counters : counters});
      }

      
    render(){
        return(
            <React.Fragment>
                <NavBar totalCounters ={this.state.counters.filter(c => c.value >0).length}/> 
                <main className="container">
                    <Counters counters={this.state.counters}
                              onReset={this.handleReset} 
                              onIncrement={this.handleIncrement}
                    />
                </main>    
            </React.Fragment>
        );
    }
}

export default App;
