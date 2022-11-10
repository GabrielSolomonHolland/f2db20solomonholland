var express = require('express');
const vehicle_controllers= require('../controllers/vehicle');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  router.get('/', vehicle_controllers.vehicle_view_all_Page ); 
  //res.render('vehicles', { title: 'Search Results' });
});

module.exports = router;
