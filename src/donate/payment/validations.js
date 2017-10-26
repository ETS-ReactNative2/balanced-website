import validator from "validator";

export default ({ name, card_number, month, year, cvv }) => ({
  name: name ? null : "Please enter the name on your credit card",
  card_number:
    card_number && validator.isCreditCard(card_number)
      ? null
      : "Please enter the number on your credit card correctly"
});
