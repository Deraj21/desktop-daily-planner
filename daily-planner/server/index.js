const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      passport = require('passport'),
      Auth0Strategy = require('passport-auth0'),
      uc = require('./user_controller'),
      ec = require('./event_controller');

require('dotenv').config();
let { SECRET, PORT, CONNECTION_STRING } = process.env;

const app = express();
app.use(bodyParser.json());
// app.use(express.static(`${__dirname}/../build`)); // uncomment when using build
app.use( session({
  secret: SECRET,
  resave: false,
  saveUninitialized: false
}) );

massive(CONNECTION_STRING)
  .then( dbInstance => {
    app.set('db', dbInstance);
  })

////
// passport strategy & stuff here
////

// login & logout endpoints

// user endpoints

// event endpoints
app.get('/api/month/:date', ec.read);
app.get('/api/currentMonth', ec.readCurrent);
app.post('/api/event', ec.create);

let port  = 4000 || PORT;
app.listen(port, () => console.log(`Server listening on port ${port}`));
