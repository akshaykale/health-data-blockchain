'use strict';

require('dotenv').config();

const
  express = require('express'),
  bodyParser = require('body-parser'),
  app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.raw({ extended: true }));

//app port
app.set('port', process.env.PORT || 3995);

app.get('/', (req, res) => {
  res.status(200).send("all good here...")
})

//start server
app.listen(app.get('port'), () => {
  console.log('App listening on port ' + app.get('port'));
});