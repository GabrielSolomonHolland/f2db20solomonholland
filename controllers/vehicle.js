
var Vehicle = require('../models/vehicle')

//list all vehicles
exports.vehicle_list = async function(req, res) { 
    try{ 
        theVehicles = await Vehicle.find(); 
        res.send(theVehicles); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }
}; 

// for a specific vehicle
exports.vehicle_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: vehicle detail: ' + req.params.id); 
}; 
 
// Handle vehicle create on POST. 
exports.vehicle_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: vehicle create POST'); 
}; 
 
// Handle Costume delete form on DELETE. 
exports.vehicle_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: vehicle delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.vehicle_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: vehicle update PUT' + req.params.id); 
};