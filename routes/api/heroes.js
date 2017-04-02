//var Promise = require('bluebird');
var Hero = require('../../models').Hero;

var heroes = {

    getAll: function(req, res) {

        var idOrder = (0) ? ['id', 'DESC'] : ['id', 'ASC'];
        Hero.findAll({order: [idOrder], offset: 0, limit:50}).then(function(allHeroes) {
                console.log(allHeroes);
                res.json(allHeroes);
            }).catch(function(error) {
                console.log(error);
                throw error;
            });
    },


    getOne: function(req, res) {
        
        Hero.findById(req.params.id).then(function(oneHero) {
                console.log(oneHero);
                res.json(oneHero);
            }).catch(function(error) {
                console.log(error);
                throw error;
            });
    },


    create: function(req, res) {

        Hero.create(req.body).then(function(newHero) {
            console.log(newHero);
            res.json(newHero);
        }).catch(function(error) {
            console.log(error);
            throw error;
        });
    },


    update: function(req, res) {

//      res.json(req.params); // {"id": "2"}
//      res.json(req.body); // {"name": "update-name-banik"}

        Hero.update(req.body, {where: req.params}).then(function(updateHero){
            console.log(updateHero);
            res.json(updateHero);
        }).catch(function(error) {
            console.log(error);
            throw error;
        });
    },
    
    
    delete: function(req, res) {

        Hero.destroy({where: req.params}).then(function(deleteHero){
            console.log(deleteHero);
            res.json(deleteHero);
        }).catch(function(error) {
            console.log(error);
            throw error;
        });
    }
};


module.exports = heroes;

/**
        //var updateHero = req.body;
        //var id = req.params.id;

        // var hero = new Hero();

        Hero.findById(req.params.id, function(err, hero) {
            if(err) res.send(err);

            console.log(hero);

            //hero.name = req.body.name;
            hero.name = req.body.name;

            hero.save(function(err){
                if(err) res.send(err);
            });
*/

/**
var small = new Tank({ size: 'small' });
small.save(function (err) {
  if (err) return handleError(err);
  // saved!
});
*/

/**    
    create: function(req, res) {
        
        var hero = new Hero();      // create a new instance of the Bear model
        hero.name = req.body.name;  // set the bears name (comes from the request)

        // save the bear and check for errors
        hero.save(function(err) {
            if (err) res.send(err);

            res.json({'name': req.body.name});
        });
        
    }
*/

/**

router.route('/bears')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {
        
        var bear = new Bear();      // create a new instance of the Bear model
        bear.name = req.body.name;  // set the bears name (comes from the request)

        // save the bear and check for errors
        bear.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Bear created!' });
        });
        
    });


    // update the bear with this id (accessed at PUT http://localhost:8080/api/bears/:bear_id)
    .put(function(req, res) {

        // use our bear model to find the bear we want
        Bear.findById(req.params.bear_id, function(err, bear) {

            if (err)
                res.send(err);

            bear.name = req.body.name;  // update the bears info

            // save the bear
            bear.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Bear updated!' });
            });

        });
    });
*/

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
*/

/**
var data = [
  {name: 'prvni', id: '1'},
  {name: 'druhy', id: '2'},
  {name: 'treti', id: '3'}
];
*/
