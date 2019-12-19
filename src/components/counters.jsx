import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
    // console.log("Handler Called", counterId);
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    let update = this.setState({ counters });
    console.log(update);
  };

  render() {
    return (
      <div className="d-block p-2 bg-dark text-white">
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
            // value={counter.value}
            // id={counter.id}
          >
            <h1>Counter {counter.id}</h1>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
