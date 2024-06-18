const {Web3}= require("web3")
const ABI= require("../ABI.json")
const web3= new Web3("https://eth-sepolia.g.alchemy.com/v2/-RtsNDDNJFotMn4xJJDmPvmg3o7iYvwP")
const contractaddress="0xf8a21ac7f173f3Fc5C399544A95a8241f5073358"
const contract= new web3.eth.Contract(ABI,contractaddress)

module.exports={contract}