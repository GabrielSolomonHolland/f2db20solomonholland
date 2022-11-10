
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
 
exports.vehicle_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Vehicle(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"model":"insight", "mileage":num, "numWheels":4} 
    document.model = req.body.model; 
    document.mileage = req.body.mileage; 
    document.numWheels = req.body.numWheels; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Costume delete form on DELETE. 
exports.vehicle_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: vehicle delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.vehicle_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: vehicle update PUT' + req.params.id); 
};

//VIEWS 
// Handle a show all view 
exports.vehicle_view_all_Page = async function(req, res) { 
    try{ 
        theVehicles = await Vehicle.find(); 
        res.render('vehicles', { title: 'Vehicle Search Results', results: theVehicles }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 