const {TransactionDAO} = require('../db-access')

async function showAllTransactions(){
    const transactionsArray = await TransactionDAO.findAll()
    return transactionsArray.map(transaction => ({ 
        _id:transaction._id,
        name:transaction.name
    }))
}

module.exports = {
    showAllTransactions
}