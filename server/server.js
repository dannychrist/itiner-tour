const express = require("express");
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require("cors");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

const PORT = 4000;

const { 
  getVenues,
  addUser,
  } = require('./handlers'); 

const app = express();

// Accept cross-origin requests from the frontend app
app.use(cors({ origin: 'http://localhost:3000' }));

app.use(function (req, res, next) {
  res.header(
    'Access-Control-Allow-Methods',
    'OPTIONS, HEAD, GET, PUT, POST, DELETE, PATCH'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
})
app.use(morgan('tiny'))
app.use(express.static('./server/assets'))
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', express.static(__dirname + '/'))

// Set up Auth0 configuration
const authConfig = {
  domain: "dev-j54ayxir.auth0.com",
  audience: "https://api/external"
};

// Define middleware that validates incoming bearer tokens
// using JWKS from YOUR_DOMAIN
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithm: ["RS256"]
});

// Define an endpoint that must be called with an access token
app.get("/api/external", checkJwt, (req, res) => {
  res.send({
    msg: "Your Access Token was successfully validated!"
  });
});

// // Mongo endpoints

// Get Venues
app.get('/venues', getVenues)


// Add User
app.post('/add-user', addUser)


// Start the app
app.listen(PORT, () => console.info(`Listening on port ${PORT}`));