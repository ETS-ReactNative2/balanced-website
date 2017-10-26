import validator from "validator";

const validateAmount = a => {
  const r = validator.isFloat(a.toString(), { min: 1 })
    ? null
    : "Please enter an amount greater than $1.00.";
  return r;
};

export default ({ amount }) => ({
  amount: validateAmount(amount)
});
