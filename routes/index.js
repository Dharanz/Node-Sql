const express = require("express");
var router = express.Router();
var db = require("../db");

//GET API
router.get("/employee", function(_req, _res) {
  var Sqlquery = "select * from Employee";
  db(_res, Sqlquery);
});

//GET API with Id
router.get("/employee/:id", function(_req, _res) {
  var Sqlquery = "select * from Employee WHERE Id=" + _req.params.id;
  db(_res, Sqlquery);
});

//POST API
router.post("/employee", function(req, res) {
  var Sqlquery =
    "INSERT INTO [employee] (Name,Phone) VALUES ('" +
    req.body.Name +
    "'," +
    req.body.Phone +
    ")";
  db(res, Sqlquery);
});

//PUT API
router.put("/employee/:id", function(req, res) {
  var query =
    "UPDATE [Employee] SET Name= '" +
    req.body.Name +
    "' , Phone=  " +
    req.body.Phone +
    "  WHERE Id= " +
    req.params.id;
  db(res, query);
});

// DELETE API
router.delete("/employee/:id", function(req, res) {
  var query = "DELETE FROM [Employee] WHERE Id=" + req.params.id;
  db(res, query);
});

// var request = new _sqlPackage.Request();
//    //calling a stored procedure
//                 request.input('Username', _sqlPackage.VarChar(50), 'admin');
//                 request.input('Password', _sqlPackage.VarChar(50), 'admin@123');
//                 request.execute('sp_CheckLogin', function (err, recordsets, returnValue) {
//                     response.send(recordsets);
//                 });

module.exports = router;
