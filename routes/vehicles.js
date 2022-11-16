var express = require('express');
const vehicle_controllers= require('../controllers/vehicle');
var router = express.Router();


router.get('/detail', vehicle_controllers.vehicle_view_one_Page);


module.exports = router;
