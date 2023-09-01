const userDocument = require("../../database/users.json")

const getUserByEmail = (email) => {
  return userDocument
    .filter(user => user.email === email)[0]
}

module.exports = {
  getUserByEmail
}