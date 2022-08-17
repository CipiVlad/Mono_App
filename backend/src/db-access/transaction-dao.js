const { ObjectId } = require("mongodb");
const { getDB } = require("./getDB");

const monoCollectionName= "transaction";

async function findAllTransactionsOfUser() {
    const db = await getDB()
    const allTransactions = await db.collection(monoCollectionName).find().toArray() 
    return allTransactions
}

async function findTransactionsById(transactionId) {
    const db = await getDB()
    const foundTransaction = await db.collection(monoCollectionName).findOne({ _id: ObjectId(transactionId) }) 
    return foundTransaction
}

async function insertTransaction(addTransaction) {
    const db = await getDB()
    return db.collection(monoCollectionName).insertOne(addTransaction)
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
    findAllTransactionsOfUser,
    findTransactionsById,
    insertTransaction,
    deleteTransaction,
    editTransaction
}
