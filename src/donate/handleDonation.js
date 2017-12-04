import Bloomerang from "./Bloomerang";

export default ({ amount, info, payment }) => {
  // Set up Bloomerang.
  Bloomerang.useKey("pub_dc454663-0e6f-11e7-bb7f-024e165d44b3");
  Bloomerang.useDonationId(16384);
  Bloomerang.useProcessor(
    12288,
    "Stripe",
    "pk_live_Ky0wo9nBbj5L3jQUJ8YmN6wR",
    true
  );

  const { recurring } = amount;

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

    Bloomerang.Account.individual()
      .firstName(first_name)
      .lastName(last_name)
      .homeAddress(address, city, state, zip, country)
      .homeEmail(email);

    // Payment details
    const { card_number, month, year, cvv, note } = payment;

    Bloomerang.CreditCard.number(card_number)
      .securityCode(cvv)
      .expirationMonth(month)
      .expirationYear(year);

    // Amount details
    const donationAmount = amount.amount;

    // Build a single or recurring donation based on the checkbox
    const transaction = recurring
      ? Bloomerang.RecurringDonation.monthly()
      : Bloomerang.Donation;

    transaction.amount(donationAmount).note(note);
  };

  return new Promise((resolve, reject) => {
    // Resolve if the donation is successful.
    Bloomerang.Api.OnSuccess = resolve;

    // Reject if the donation fails.
    Bloomerang.Api.OnError = reject;

    // Begin handling the donation.
    if (recurring) {
      Bloomerang.Api.recurringDonate();
    } else {
      Bloomerang.Api.donate();
    }
  });
};
