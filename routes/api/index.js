/**
 * Routing module for handling all routes under /api
 */

/**
 * Import core modules
 */
var express = require('express');
var router = express.Router();
var authenticationHelpers = require('../authenticationHelpers');

var users = require('./users');
//var heroes_old = require('./heroes_old');

var heroes = require('./heroes');


router.use('/users', users);

router.get('/heroes', heroes.getAll);
router.get('/heroes/:id', heroes.getOne);
router.post('/heroes', heroes.create);
router.put('/heroes/:id', heroes.update);
router.delete('/heroes/:id', heroes.delete);


router.get('/authenticated', authenticationHelpers.isAuth, function(req, res, next) {
  res.json({"authenticated": true});
});

router.get('/', function(request, response) {
  response.json({"made it": "ok"});
});

/**
router.get('/heroes', function(request, response) {
  response.json(
    [
      { "id": 11, "name": "Mr. Nice" },
      { "id": 12, "name": "Narco" },
      { "id": 13, "name": "Bombasto" },
      { "id": 14, "name": "Celeritas" },
      { "id": 15, "name": "Magneta" },
      { "id": 16, "name": "RubberMan" },
      { "id": 17, "name": "Dynama" },
      { "id": 18, "name": "Dr IQ" },
      { "id": 19, "name": "Magma" },
      { "id": 20, "name": "Dman" },
      { "id": 11, "name": "Mr. Nice" },
      { "id": 12, "name": "Narco" },
      { "id": 13, "name": "Bombasto" },
      { "id": 14, "name": "Celeritas" },
      { "id": 15, "name": "Magneta" },
      { "id": 16, "name": "RubberMan" },
      { "id": 17, "name": "Dynama" },
      { "id": 18, "name": "Dr IQ" },
      { "id": 19, "name": "Magma" },
      { "id": 20, "name": "Dman" }
    ]
  );
});
*/

module.exports = router;