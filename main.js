const express = require('express');
const bodyParser = require('body-parser');
// Template engine.
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const path = require('path');

// Inicializacion de express
const app = express();

// Setup para el motor de plantillas.
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Setup para el body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Setup para public y recursos estaticos. => define para utilizar los recursos estaticos.
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('contact')
});

app.listen(3000, () => console.log('Server started....'));
