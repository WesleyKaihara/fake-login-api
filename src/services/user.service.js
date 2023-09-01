import userDocument from '../../database/users.json' assert {type: 'json'};

export const getUserByEmail = (email) => {
  return userDocument
    .filter(user => user.email === email)[0]
}
