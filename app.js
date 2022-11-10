var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var vehicleRouter = require('./routes/vehicles');
var gridbuildRouter = require('./routes/gridbuild');
var resourceRouter = require('./routes/resource');
var app = express();

var vehicle = require("./models/vehicle")
console.log("model imported")

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use('/vehicle',vehicleRouter)
app.use('/routes',resourceRouter)


require('dotenv').config(); 
const connectionString =  
process.env.MONGO_CON 
mongoose = require('mongoose'); 
mongoose.connect(connectionString,  
{useNewUrlParser: true, 
useUnifiedTopology: true}); 

//default
app.use('/', indexRouter);
app.use('/vehicle', vehicleRouter);
console.log("app using class")
app.use('/gridbuild', gridbuildRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//Get the default connection 
var db = mongoose.connection; 
 
//Bind connection to error event  
db.on('error', console.error.bind(console, 'MongoDB connection error:')); 

db.once("open", function(){ 
  console.log("Connection to DB succeeded")}); 
 
let reseed = true; 
if (reseed) { recreateDB();} 

// We can seed the collection if needed on 
//server start 
async function recreateDB(){ 
  // Delete everything 
  await vehicle.deleteMany(); 
 
  let instance1 = new vehicle({model:"Focus",numWheels:4,mileage:30}); 
  let instance2 = new vehicle({model:"Insight",numWheels:4,mileage:40});
  let instance3 = new vehicle({model:"Harley",numWheels:2,mileage:15});
  instance1.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("First object saved") 
  }); 
  instance2.save( function(err,doc) { 
    if(err) return console.error(err); 
    console.log("Second object saved") 
}); 
  instance3.save( function(err,doc) { 
  if(err) return console.error(err); 
  console.log("Third object saved") 
}); 
}


module.exports = app;
