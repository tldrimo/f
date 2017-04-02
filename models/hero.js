"use strict";

var Sequelize = require("sequelize");
var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
  var Hero = sequelize.define('Hero', {
    id:{
        type:          Sequelize.INTEGER(11),
        field:         'id',
        allowNull:     false,
        primaryKey:    true,
        autoIncrement: true
    },
    name:{
        type:      Sequelize.STRING(64),
        field:     'name',
        allowNull: false
    }
  },  
  {
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,

    // don't delete database entries but set the newly added attribute deletedAt
    // to the current date (when deletion was done). paranoid will only work if
    // timestamps are enabled
    paranoid: true,

    // don't use camelcase for automatically added attributes but underscore style
    // so updatedAt will be updated_at
    underscored: true,

    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,

    // define the table's name
    tableName: 'heroes'
  });

  return Hero;
};