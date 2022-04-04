import validator from "validator";

const validateAmount = a =>
  validator.isFloat(a.toString(), { min: 1 })
    ? null
    : "Please enter an amount greater than $1.00";

export default ({ amount }) => ({
  amount: validateAmount(amount)
});
