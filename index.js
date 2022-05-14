var express = require('express');
var mysql = require('mysql2');
var app = express();


//database connection
global.database = mysql.createConnection({
    host: "bpxxsqkegtgglbmdsk7i-mysql.services.clever-cloud.com",
    // user: process.env.USER,
    user: "uuofqr8noewxa5k1",
    database: "bpxxsqkegtgglbmdsk7i",
    password: "mfM521mfkveIJ5utasdX",
  });

//static routes
app.use(express.static('public'));

app.get('/user-list', function(req, res) {
    var sql='SELECT * FROM Orders';
    database.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.json(data);
  });
});



app.get('/order-details', function(req, res) {
  console.log('Database retrived card details');
  var sql='SELECT * FROM Card_details';
  database.query(sql, function (err, data, fields) {
  if (err) throw err;
  res.json(data);
});
});

app.get('/customer-ordered/:it', function(req, res) {
  console.log(req.params.it);
  var sql='SELECT DISTINCT Customer FROM Card_details where shop = "'+req.params.it+'"';
  database.query(sql, function (err, data, fields) {
  if (err) throw err;
  res.json(data);
});
});

app.get('/order-cu-details', function(req, res) {
  console.log('Database retrived customer who ordered in the card');
  var sql='SELECT * FROM User_order where OrderId=1001';
  database.query(sql, function (err, data, fields) {
  if (err) throw err;
  res.json(data);
});
});





app.listen(8000,(err)=>{
    console.log(err);
})