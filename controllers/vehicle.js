
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

exports.vehicle_detail = async function(req, res) { 
    console.log("detail "  + req.params.id)
    try { 
        result = await Vehicle.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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
 
// Handle vehicle delete form on DELETE. 
exports.vehicle_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Vehicle.findByIdAndDelete(req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 

// Handle Vehicle update form on PUT. 
exports.vehicle_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Vehicle.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.model)  
               toUpdate.model = req.body.model; 
        if(req.body.mileage) toUpdate.mileage = req.body.mileage; 
        if(req.body.numWheels) toUpdate.numWheels = req.body.numWheels; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
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


exports.vehicle_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    const queryObject = url.parse(req.url, true).query;
    try { 
        result = await Vehicle.findById( req.query.id) 
        res.render('vehicledetail', { title: 'Vehicle Detail', toShow: result }); 
    } 
    
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 