const { TransactionsDAO } = require("../db-access")


function showDetailTransaction ({transactionId}){
    return TransactionsDAO.findTransactionsById(transactionId)
}

module.exports = {
    showDetailTransaction
}

