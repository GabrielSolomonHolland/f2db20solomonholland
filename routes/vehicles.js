var express = require('express');
const vehicle_controllers= require('../controllers/vehicle');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  router.get('/', vehicle_controllers.vehicle_view_all_Page ); 
  //res.render('vehicles', { title: 'Search Results' });
});

router.get('/detail', vehicle_controllers.vehicle_view_one_Page);

router.post('/',function(req,res,next)
{
  router.post('/',vehicle_controllers.vehicle_create_post);
})

module.exports = router;
