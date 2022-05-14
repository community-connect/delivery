var mysql=require('mysql2');
 var connection=mysql.createConnection({
   host:'bpxxsqkegtgglbmdsk7i-mysql.services.clever-cloud.com',
   user:'uuofqr8noewxa5k1',
   password:'mfM521mfkveIJ5utasdX',
   database:'bpxxsqkegtgglbmdsk7i'
 });
 connection.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
}); 
module.exports = connection; 