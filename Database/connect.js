var Connection = require("tedious").Connection;
var config = {
  server: "DESKTOP-UEIR2F3",
  authentication: {
    type: "default",
    options: {
      userName: "sa",
      password: "CG-vak123"
    }
  },
  options: {
    database: "SampleDB",
    instanceName: "SQLEXPRESS",
    rowCollectionOnDone: true,
    useColumnNames: false
  }
};
var connection = new Connection(config);
connection.on("connect", function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected");
  }
});
module.exports = connection;
