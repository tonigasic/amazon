// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51I3MVvJLHn6iQ6z8WiPeC2LZiHYMBRDJfKWHOc1rhHwxqPS3ixStri1fjWETbDZFXN3qFNjEow2y16r46tARjqod00DitblKJe');

// - App Config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('Hello world'));

app.post('/payment/create', async (request, response) => {
    const total = request.query.total;
    console.log('payment request recieved >>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'eur'
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

// - Listen command
exports.api = functions.https.onRequest(app);