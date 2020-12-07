const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HtcHlLvSei0KP58raCPy3vl1NDNHba2PIPNg2CTcnBWzGhvBP2eKaaA4ue1Rb6UpDiKdaf1pY1pRJOtJcGOnz2300ZzMC5s2t"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr"
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:6001/yamini-ecom-clone/us-central1/api
