const { TransactionsDAO } = require('../db-access');

function updateTransaction({transactionId,doneValue}){
    return TransactionsDAO.editTransaction(transactionId,doneValue);
}

module.exports ={
    updateTransaction
}