const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + './../public'))



const port = 3000;
app.listen(port, () => {
  console.log('Listening on port: ', port);
})
