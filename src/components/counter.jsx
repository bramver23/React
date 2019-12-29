import React, { Component } from "react";

class Counter extends Component {
  

  styles = {
    fontSize: 30,
    fontWeight: "bold",
    margin: "20px",
    padding:"9px 18px"
  };

  render() {
    // React.createElement('div');
    console.log("props -> ", this.props);

    return (
      <React.Fragment>
            <div className="titleContainer">
                <span className="title">Reserve your seat to watch the ONF best movies</span>
           
            
                 <div className="controllersContainer">
                  <span style={this.styles} className={this.getBadgeClasses()} >
                        {this.formatCount()}
                    </span>
                    
                    <button
                      onClick={() => {
                        // this.handleIncrement(this.state.value);
                        this.props.onIncrement(this.props.counter);
                      }}
                      className="addButton reactMargin"
                    >
                      Add
                    </button>

                    <button onClick={()=>this.props.onReset(this.props.counter)}
                      className="resetButton reactMargin"
                    >
                      Reset
                    </button>
                 </div>
                  
             
        </div>
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
