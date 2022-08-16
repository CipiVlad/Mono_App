const { TransactionsDAO } = require("../db-access")

async function showAllTransactions(){
    const transactions = await TransactionsDAO
        .findAllTransactionsObjects()
    return transactions.map(trans => ({
        _id: trans._id,
        name: trans.name,
        income: trans.income,
        amount: trans.amount,
        date: trans.date,
        time: trans.time,
        icon: trans.icon,
        userId: trans.userId
    }))
}

module.exports = {
    showAllTransactions
}