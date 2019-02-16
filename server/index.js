'use strict';

require('dotenv').config();

const
  express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  web3 = require('./web3'),
  ipfs = require('./ipfs'),
  StoreData = require('./StoreData'),
  fileUpload = require('express-fileupload');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.raw({ extended: true }));

app.use(fileUpload());

// app.use(fileUpload({
//   limits: { fileSize: 50 * 1024 * 1024 },
// }));

//app port
app.set('port', process.env.PORT || 3995);

app.get('/', (req, res) => {
  res.status(200).send("all good here...")
})

app.post('/upload', async (req, res) => {
  if (req.files) {
    console.log('hi')
  } else {
    res.send('Error')
  }
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.akFile.data;

  // Upload this buffer to ipfs
  console.log("web3 value is ", web3.eth.getAccounts());
  const accounts = await web3.eth.getAccounts();
  console.log('Sending from Metamask account: ', accounts[0]);
  const ethAddress = await StoreData.options.address;
  console.log(ethAddress);
  //this.setState({ ethAddress });
  await ipfs.add(sampleFile, (err, ipfsHash) => {
    console.log(err, ipfsHash);
    //this.setState({ ipfsHash: ipfsHash[0].hash });

    // Store the hash to blockchain
    StoreData.methods.set(ipfsHash[0].hash).send({
      from: accounts[0]
    }, (error, transactionHash) => {
      if (error) {
        console.log('ERRRROOORRR')
        res.send({
          code: 200,
          result: "Error"
        })
      }
      else {
        console.log("transaction hash is ", transactionHash);
        res.send({
          code: 200,
          result: "Success"
        })
      }
    });
  })

  //return the response

});

//start server
app.listen(app.get('port'), () => {
  console.log('App listening on port ' + app.get('port'));
});