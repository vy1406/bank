const Transaction = require("../server/models/Transaction")

class DB_util {
    async getTransactions() {
        let result = await Transaction.find({})
        return result
    }

    async dropCollection() {
        await Transaction.collection.drop()
        console.log("collection Transaction was dropped")
    }
    async saveTransaction(amount, vendor, category) {
        let T = new Transaction({ amount, vendor, category })
        T.save()
        console.log(`Transaction with ${T._id} was saved`)
    }
    async populateWithDummyData() {
        const result = [
            { amount: 3200, vendor: "Elevation", category: "Salary" },
            { amount: -7, vendor: "Runescape", category: "Entertainment" },
            { amount: -20, vendor: "Subway", category: "Food" },
            { amount: -98, vendor: "La Baguetterie", category: "Food" },
            { amount: 5000, vendor: "Uncle Tom", category: "Oil" },
            { amount: 190, vendor: "Pikachu", category: "Black market" },
        ]

        for (let R of result) {
            let T = new Transaction({
                amount: R.amount,
                vendor: R.vendor,
                category: R.category
            })
            T.save()
            console.log(`Transaction with ${T._id} was saved`)
        }
    }

    async saveOperation(amount, vendor, category) {
        let T = new Transaction({ amount, vendor, category })
        T.save()
        console.log(`Transaction with ${T._id} was saved`)
    }
}

module.exports = DB_util