const {TransactionsDAO} = require('../db-access');

function createNewTransaction(addTransaction){
    return TransactionsDAO.insertTransaction(addTransaction)
};

module.exports = {createNewTransaction};