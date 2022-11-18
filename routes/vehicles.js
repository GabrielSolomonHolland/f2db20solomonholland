var express = require('express');
const vehicle_controllers= require('../controllers/vehicle');
var router = express.Router();

router.get('/', vehicle_controllers.vehicle_view_all_Page);

router.get('/detail', vehicle_controllers.vehicle_view_one_Page);

router.get('/create', vehicle_controllers.vehicle_create_Page);

router.get('/update', vehicle_controllers.vehicle_update_Page);

router.get('/delete', vehicle_controllers.vehicle_delete_Page);


module.exports = router;
