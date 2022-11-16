var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var vehicle_controller = require('../controllers/vehicle'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Vehicle.  
router.post('/vehicles', vehicle_controller.vehicle_create_post); 
 
// DELETE request to delete Vehicle. 
router.delete('/vehicles/:id', vehicle_controller.vehicle_delete); 
 
// PUT request to update Vehicle. 
router.put('/vehicles/:id', vehicle_controller.vehicle_update_put); 
 
// GET request for one Vehicle. 
router.get('/vehicles/:id', vehicle_controller.vehicle_detail); //
 
// GET request for list of all Vehicle items. 
router.get('/vehicles', vehicle_controller.vehicle_list); 

/* GET create vehicle page */ 
router.get('/create', vehicle_controller.vehicle_create_Page);

/* GET create update page */ 
router.get('/update', vehicle_controller.vehicle_update_Page);
 
module.exports = router; 