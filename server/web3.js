const Web3 = require('web3')

const _ = new Web3('ws://127.0.0.1:7545')//(window.Web3.currentProvider);

module.exports = _