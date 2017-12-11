import React from "react";

export default class extends React.Component {
  componentDidMount() {
    this.input.focus();
  }

  handleChange = e => {
    const value = e.target.value;
    this.props.setValue(parseInt(value, 10));
  };

  render() {
    const value = this.props.getValue();
    return (
      <div className="Donate_Amount">
        <span id="Donate_Currency">$</span>
        <input
          onChange={this.handleChange}
          ref={i => (this.input = i)}
          value={value}
          id="Donate_Other"
          type="number"
        />
      </div>
    );
  }
}
