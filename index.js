const express = require('express');
const mongoose = require('mongoose')

const routes = require('./routes');

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

app.use(routes);

mongoose.connect('mongodb://localhost/socail-api-network', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});

