const express = require('express')
    , bodyParser = require('body-parser')
    , config = require('./config')
    , mainCtrl = require('./mainCtrl');

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'))

app.post('/api/send_email', mainCtrl.sendEmail)


app.listen(config.port, () => {
  console.log('Listening on port: ', config.port);
})
