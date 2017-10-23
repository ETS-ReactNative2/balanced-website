import React from "react";

export default class extends React.Component {
  componentDidMount() {
    this.input.focus();
  }

  handleChange = e => {
    const value = e.target.value;
  };

  render() {
    return (
      <div className="Donate_Amount">
        <span id="Donate_Currency">$</span>
        <input
          onChange={this.handleChange}
          ref={i => (this.input = i)}
          id="Donate_Other"
          type="number"
        />
      </div>
    );
  }
}
