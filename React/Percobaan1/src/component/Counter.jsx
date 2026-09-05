import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="flex items-center mt-4 gap-6">
        <button
          className="bg-black p-3 text-white disabled:opacity-50"
          onClick={this.decrement}
          disabled={this.state.count === 0}
        >
          -
        </button>
        <h1>{this.state.count}</h1>
        <button
          className="bg-black p-3 text-white"
          onClick={this.increment}
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
