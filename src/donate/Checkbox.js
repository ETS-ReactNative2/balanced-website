import React from "react";
import { FormInput } from "react-form";

import "./Checkbox.css";

class Checkbox extends React.Component {
  componentWillMount() {
    const { setValue } = this.props;
    setValue(false);
  }

  toggle = () => {
    const { setValue, getValue } = this.props;
    setValue(!getValue());
  };

  render() {
    const checked = this.props.getValue();
    const { children } = this.props;
    return (
      <div onClick={this.toggle} className="Donate_CheckboxContainer">
        <div className="Donate_Checkbox">{checked && "✔"}</div>
        <span>{children}</span>
      </div>
    );
  }
}

const createCheckbox = (value, props) => formProps => (
  <Checkbox value={value} {...props} {...formProps} />
);

export default ({ value, ...props }) => (
  <FormInput field="recurring">{createCheckbox(value, props)}</FormInput>
);
