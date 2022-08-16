const { ObjectId } = require("mongodb");
const { getDB } = require("./getDB");

const monoCollectionName= "transaction";

async function findAllTransactionsObjects() {
    const db = await getDB()
    const allTransactions = await db.collection(monoCollectionName).find().toArray() 
    return allTransactions
}

async function findTransactionsById(id) {
    const db = await getDB()
    const foundTransaction = await db.collection(monoCollectionName).findOne({ _id: ObjectId(id) }) 
    return foundTransaction
}

async function insertTransaction(addIncomeExpense) {
    const db = await getDB()
    return db.collection(monoCollectionName).insertOne(addIncomeExpense)
}

async function deleteTransaction(transactionId) {
    const db = await getDB();
    const removeTransaction = db.collection(monoCollectionName).findOneAndDelete({ _id: ObjectId(transactionId) })
    return removeTransaction
}

async function editTransaction(transactionId, newValue) {
    const db = await getDB()
    const updateTransaction = db.collection(monoCollectionName).findOneAndUpdate(
        { _id: ObjectId(transactionId) },
        { $set: { name: newValue.name} },
        { returnDocument: "after" }
    )

    return updateTransaction
}


module.exports = {
    findAllTransactionsObjects,
    findTransactionsById,
    insertTransaction,
    deleteTransaction,
    editTransaction
}
