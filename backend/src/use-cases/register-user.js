const { UserDAO } = require("../db-access");
const { hash, createRandomHash } = require("../utils/hash");

async function registerUser({ name, email, password, userImg, totalBalance }) {
  const passwordSalt = createRandomHash();
  const passwordHash = hash(password + "" + passwordSalt);

  const newUser = {
    name,
    email,
    userImg,
    totalBalance,
    passwordHash,
    passwordSalt,
  };

  const insertResult = await UserDAO.insertUser(newUser);
  const userView = {
    _id: insertResult.insertedId,
    name,
    email,
  };

  return userView;
}

module.exports = {
  registerUser,
};
