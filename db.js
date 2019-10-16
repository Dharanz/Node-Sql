var _sqlPackage = require("mssql");

//Set up your sql connection string, i am using here my own, you have to replace it with your own.
var dbConfig = {
  user: "sa",
  password: "CG-vak123",
  server: "DESKTOP-UEIR2F3\\SQLEXPRESS",
  database: "SampleDB"
};

//Function to connect to database and execute query
var QueryToExecuteInDatabase = function(response, strQuery) {
  //close sql connection before creating an connection otherwise you will get an error if connection already exists.
  _sqlPackage.close();
  //Now connect your sql connection
  _sqlPackage.connect(dbConfig, function(error) {
    if (error) {
      console.log("Error while connecting to database :- " + error);
      response.send(error);
    } else {
      //let's create a request for sql object
      var request = new _sqlPackage.Request();
      //Query to run in our database
      request.query(strQuery, function(error, responseResult) {
        if (error) {
          console.log("Error while connecting to database:- " + error);
          response.send(error);
        } else {
          response.send(responseResult);
        }
      });
    }
  });
};

module.exports = QueryToExecuteInDatabase;
