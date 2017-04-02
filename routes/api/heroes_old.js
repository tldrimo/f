/**
* Routing module for handling all routes under /heroes
*/

/**
 * Import core modules
 */

var express = require('express');
var router  = express.Router();
var models  = require('../../models');
var authenticationHelpers = require('../authenticationHelpers');

// /heroes
var getAllHeroesPublicController = require('../../controllers').getAllHeroesPublic;
router.get('/', authenticationHelpers.isNotAuth, function(request, response) {
  var offset = request.query.offset || 0;
  var limit = request.query.limit || 50;
  var desc = request.query.desc || false;

  getAllHeroesPublicController(offset, limit, desc).then(function(heroes) {
    response.json(heroes);
  }).catch(function(error) {
    response.json(error);
  });

});


// /heroes/update
var updateHeroController = require('../../controllers').updateHero;
router.put('/hero/:id', authenticationHelpers.isNotAuth, function(request, response, next) {
  updateHeroController(request.body).then(function(hero) {
    response.json(hero);
  }).catch(function(error) {
    console.log(error);
    response.status(400).json({"reason": error.message});
  });
});


/**
var hrs = {
  getAll: function(req, res) {
    var allHeroes = data; // Spoof a DB call
    res.json(allHeroes);
  }
};

var data = [
  {name: 'prvni', id: '1'},
  {name: 'druhy', id: '2'},
  {name: 'treti', id: '3'}
];

module.exports = hrs;
*/

module.exports = router;

/**
var products = {
 
  getAll: function(req, res) {
    var allProducts = data; // Spoof a DB call
    res.json(allProducts);
  },
 
  getOne: function(req, res) {
    var id = req.params.id;
    var product = data[0]; // Spoof a DB call
    res.json(product);
  },
 
  create: function(req, res) {
    var newProduct = req.body;
    data.push(newProduct); // Spoof a DB call
    res.json(newProduct);
  },
 
  update: function(req, res) {
    var updateProduct = req.body;
    var id = req.params.id;
    data[id] = updateProduct // Spoof a DB call
    res.json(updateProduct);
  },
 
  delete: function(req, res) {
    var id = req.params.id;
    data.splice(id, 1) // Spoof a DB call
    res.json(true);
  }
};
 
var data = [{
  name: 'product 1',
  id: '1'
}, {
  name: 'product 2',
  id: '2'
}, {
  name: 'product 3',
  id: '3'
}];
 
module.exports = products;
*/
