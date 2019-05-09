const express = require('express')
const router = express.Router()
const DB_util = require('../../Util/DB_util')

const transactionDao = new DB_util()
router.get('/transactions', async function (req, res) {
    let result = []

    result = await transactionDao.getTransactions()
    res.send(result)
})

router.post('/transaction', async function (req, res) {
    let amount = req.body.amount
    let vendor = req.body.vendor
    let category = req.body.category

    await transactionDao.saveTransaction(amount, vendor, category)
    res.send()
})
// --------------------------------
// One time function - at deploying the project
// --------------------------------
router.get('/loadData', async function (req, res) {
    await transactionDao.populateWithDummyData()
    res.send()
})

router.get('/dropCollection', async function (req, res) {
    await transactionDao.dropCollection()
    res.send("collection droppped")
})

module.exports = router
