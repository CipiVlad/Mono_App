const { ObjectId } = require("mongodb");
const { getDB } = require("./getDB");

const monoCollectionName= "transaction";

async function findAllTransactionsObjects() {
    const db = await getDB()
    const allTransactions = await db.collection(monoCollectionName).find().toArray() // toArray() returned auch eine promise, daher await
    return allTransactions
}

async function findTransactionsById(id) {
    const db = await getDB()
    const foundTransaction = await db.collection(monoCollectionName).findOne({ _id: ObjectId(id) }) // findOne() returned auch eine promise, daher await
    return foundTransaction
}

async function insertOne(notesInfo) {
    const db = await getDB()
    // wir können das direkt returnen auch (muss nicht wie oben alles extra benannt werden)
    return db.collection(monoCollectionName).insertOne(notesInfo) // insertOne() returned auch eine promise, daher await
}

async function delteNote(noteId) {
    const db = await getDB();
    const removeNote = db.collection(monoCollectionName).findOneAndDelete({ _id: ObjectId(noteId) })
    return removeNote
}

async function editNote(noteId, newTextValue) {
    const db = await getDB()
    const updateNote = db.collection(monoCollectionName).findOneAndUpdate(
        { _id: ObjectId(noteId) },
        { $set: { text: newTextValue.text, title: newTextValue.title} },
        { returnDocument: "after" }
    )

    return updateNote
}


module.exports = {
    findAll,
    findById,
    insertOne,
    delteNote,
    editNote
}
