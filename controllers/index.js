var getUserPublic = require('./getUserPublic');
var getAllUsersPublic = require('./getAllUsersPublic');
var truncateUserObject = require('./truncateUserObject');
var registerUser = require('./registerUser');
var userExists = require('./userExists');

var getAllHeroesPublic = require('./getAllHeroesPublic');

module.exports = {
  getUserPublic: getUserPublic,
  getAllUsersPublic: getAllUsersPublic,
  truncateUserObject: truncateUserObject,
  registerUser: registerUser,
  userExists: userExists,

  getAllHeroesPublic: getAllHeroesPublic
}