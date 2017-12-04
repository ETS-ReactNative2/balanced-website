import validator from "validator";

export default ({ name, card_number, month, year, cvv }) => ({
  name: name ? null : "Please enter the name on your credit card",
  card_number:
    card_number && validator.isCreditCard(card_number)
      ? null
      : "Please enter the number on your credit card correctly",
  month:
    month && validator.isLength(month, { max: 2 })
      ? null
      : "Please enter your expiry month as MM",
  year:
    year && validator.isLength(year, { max: 4 })
      ? null
      : "Please enter your expiry year as YYYY",
  cvv:
    year && validator.isLength(cvv, { max: 4 })
      ? null
      : "Please enter your CVV correctly"
});
