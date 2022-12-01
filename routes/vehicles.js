var express = require('express');
const vehicle_controllers= require('../controllers/vehicle');
var router = express.Router();

router.get('/', vehicle_controllers.vehicle_view_all_Page);

router.get('/detail', vehicle_controllers.vehicle_view_one_Page);

router.get('/create', vehicle_controllers.vehicle_create_Page);
 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

router.get('/update', secured, vehicle_controllers.vehicle_update_Page);

router.get('/delete', vehicle_controllers.vehicle_delete_Page);


module.exports = router;
