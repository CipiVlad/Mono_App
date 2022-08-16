const {TransactionsDAO} = require('../db-access');

function createNewIncome(addNewIncome){
    return TransactionsDAO.insertTransaction(addNewIncome)
};

module.exports = {createNewIncome};