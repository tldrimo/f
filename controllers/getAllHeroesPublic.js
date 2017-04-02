var Promise = require('bluebird');
var Hero = require('../models').Hero;
//var truncateHeroObject = require('./truncateHeroObject');

module.exports = Promise.method(function getAllHeroesPublic(offset, limit, desc) {
  offset*=1; // ensure value is a number in the case where it is not automatically
  limit*=1;  // ^
  var idOrder = (desc) ? ['id', 'DESC'] : ['id', 'ASC'];
  return Hero.findAll({order: [idOrder], offset: offset, limit:limit}).then(function(heroes) {
    //for (var i = 0; i < heroes.length; ++i) {
      //heroes[i] = truncateHeroObject(heroes[i]);
      //heroes[i] = heroes[i];
    //}
    console.log(heroes);
    return heroes;
  }).catch(function(error) {
    console.log(error);
    return error;
  });
});