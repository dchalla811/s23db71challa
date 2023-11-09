//const mongoose = require("mongoose")
//const walletSchema = mongoose.Schema({
  //  wallets_type: string,
    //wallets_color: string,
    //wallets_capacity: number
//})
//module.exports = mongoose.model("Wallet",walletSchema)

const mongoose = require("mongoose");
const walletSchema = mongoose.Schema({
    wallets_type: String,
    wallets_color: String,
    wallets_capacity: Number
})
module.exports = mongoose.model("wallet", walletSchema)
