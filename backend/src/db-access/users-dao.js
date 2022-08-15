const { getDB } = require("./getDB");
const { ObjectId } = require("mongodb");

const usersCollectionName = "users";

async function findAllUsers() {
  const db = await getDB();
  const allUsers = db.collection(usersCollectionName).find().toArray();
  return allUsers;
}
async function findUserById(id) {
  const db = await getDB();
  const foundUser = await db
    .collection(usersCollectionName)
    .findOne({ _id: new ObjectId(id) });
  return foundUser;
}
async function findUserByEmail(userEmail) {
  const db = await getDB();
  const foundUser = db
    .collection(usersCollectionName)
    .findOne({ email: userEmail });
  return foundUser;
}
async function insertUser(userInfo) {
  const db = await getDB();
  const insertResult = await db
    .collection(usersCollectionName)
    .insertOne(userInfo);
  return insertResult;
}
module.exports = {
  findAllUsers,
  findUserByEmail,
  findUserById,
  insertUser,
  updateUsersTotalBalance,
};
