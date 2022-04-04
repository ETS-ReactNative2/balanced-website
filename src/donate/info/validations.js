export default ({ address, city, state, zip, country }) => ({
  address: address ? null : "Please enter your address",
  city: city ? null : "Please enter your city",
  state: state ? null : "Please enter your state",
  zip: zip ? null : "Please enter your ZIP code",
  country: country ? null : "Please select your country"
});
