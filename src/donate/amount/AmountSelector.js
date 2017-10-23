import React from "react";
import { FormInput } from "react-form";
import Amount from "./Amount";

const TOP_AMOUNTS = [10, 40, 100];
const BOTTOM_AMOUNTS = [500, "OTHER"];

class AmountSelector extends React.Component {
  componentWillMount() {
    const { setValue, value } = this.props;
    setValue(value);
  }

  render() {
    const props = this.props;
    const { getValue } = props;
    return (
      <div>
        <div className="Donate_AmountRow">
          {TOP_AMOUNTS.map(a => (
            <Amount key={a} amount={a} selected={getValue() === a} {...props} />
          ))}
        </div>

        <div className="Donate_AmountRow">
          <div className="Donate_Space" />
          {BOTTOM_AMOUNTS.map(a => (
            <Amount amount={a} key={a} selected={getValue() === a} {...props} />
          ))}
          <div className="Donate_Space" />
        </div>
      </div>
    );
  }
}

const createSelector = (value, props) => formProps => (
  <AmountSelector value={value} {...props} {...formProps} />
);

export default ({ value, ...props }) => (
  <FormInput field="amount">{createSelector(value, props)}</FormInput>
);
