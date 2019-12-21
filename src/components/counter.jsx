import React, { Component } from "react";

class Counter extends Component {
  //   this component is for any data that the componets needs
  //   state = {
  //     value: this.props.counter.value
  //     // ,imageUrl: "https://picsum.photos/id/72/200/200"
  //   };

  styles = {
    fontSize: 50,
    fontWeight: "bold"
  };

  //   handleIncrement = product => {
  //     // console.log("Increment Clicked ", { value: this.state.value + 1 });
  //     console.log(product);
  //     this.setState({ value: this.state.value + 1 });

  //   };

  render() {
    // React.createElement('div');
    console.log("props -> ", this.props);

    return (
      <React.Fragment>
        {/* between the brackets we can use any js expresion */}
        {/* <img src={this.state.imageUrl} alt="" /> */}
        {/* {this.props.children} */}

        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => {
            // this.handleIncrement(this.state.value);
            this.props.onIncrement(this.props.counter);
          }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m2"
        >
          Delete
        </button>
        <img className="onfLogo" src={require("../images/onf.png" )}></img>

      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    // classes += this.state.value === 0 ? "warning" : "primary";
    // console.log(classes);
    // console.log(this.state.value);
    return classes;
  }

  formatCount() {
    // const { value } = this.state;
    const { value } = this.props.counter;
    return value === 0 ? "0" : value;
  }
}

export default Counter;
