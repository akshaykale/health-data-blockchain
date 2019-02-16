import web3 from './web3';


const contractAddress = "0xF974c529a674b0999057266C4AE621791923377E"

const abi = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "x",
        "type": "string"
      }
    ],
    "name": "set",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x4ed3885e"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "get",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x6d4ce63c"
  }
];

const StoreData = new web3.eth.Contract(abi, contractAddress);
export default StoreData
