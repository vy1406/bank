const mongoose = require("mongoose")
const Schema = mongoose.Schema

const TransactionSchema = new Schema({
    amount: Number,
    vendor: String,
    category : String
})

const Transaction = mongoose.model("Transaction", TransactionSchema)

module.exports = Transaction