import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count || 0,
    };

    // * binding of increment method to the class.
    this.increment = this.increment.bind(this);
  }
  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  //! Our method is not binded to the class as default,so we cant use this keyword.
  //* The methods defined by React are binded to the class as default.
  //* So, we should bind our methods to the class in the contstructor or
  //* we can use arrow function for automatic binding.

  render() {
    return (
      <div className="container text-center mt-4">
        <h1>COUNT:{this.state.count}</h1>
        <button className="btn btn-success" onClick={this.increment.bind(this)}>
          INCREMENT
        </button>
        <button className="btn btn-dark" onClick={this.decrement}>
          DECREMENT
        </button>
      </div>
    );
  }
}

export default Counter;