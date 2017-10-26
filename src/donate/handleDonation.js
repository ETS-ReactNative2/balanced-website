import Bloomerang from "./Bloomerang";

export default ({ amount, info, payment }) => {
  // Connect to live database
  Bloomerang.useKey("pub_03d438b6-d679-11e4-bba1-0ad83c6949df");

  Bloomerang.Api.OnSubmit = args => {
    // Info details
    const {
      first_name,
      last_name,
      email,
      address,
      city,
      state,
      zip,
      country
    } = info;

    Bloomerang.Account
      .individual()
      .firstName(first_name)
      .lastName(last_name)
      .homeAddress(address, city, state, zip, country)
      .homeEmail(email);

    // Payment details
    const { card_number, month, year, cvv, note } = payment;

    Bloomerang.CreditCard
      .number(card_number)
      .securityCode(cvv)
      .expirationMonth(month)
      .expirationYear(year);

    // Amount details
    const donationAmount = amount.amount;
    const { recurring } = amount;

    // Build a single or recurring donation based on the checkbox
    var transaction = recurring
      ? Bloomerang.RecurringDonation.monthly()
      : Bloomerang.Donation;

    transaction.amount(donationAmount).note(note);
  };

  // When the charge goes through successfully
  Bloomerang.Api.OnSuccess = function(response) {
    console.log("Hey fancy pants", response);
  };

  // When the server responds with an error
  Bloomerang.Api.OnError = function(response) {
    console.error("Shit is fucked", response);
  };
};
