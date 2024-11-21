const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id:
    "AaON-xSyXYcOcMTPRRYeiSN4BvKCY4WbFnE5EIW25dtXZeE7XrQTDf0y3-B5gF5EGT9W3lpIsKm6Rz4x",
  client_secret:
    "EOKMdtj--5mSNB6e-MDC-ZLWfZyRAL8HGqte7M4VPdfEmuwTCWYI0466ZRTt6h7HY9pl-RR0XUN76G6w",
});

module.exports = paypal;
