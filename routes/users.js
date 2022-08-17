var express = require("express");
var router = express.Router();

const mysql = require("mysql");

/* GET users listing. */
router.get("/", function (req, res, next) {
  var mysqlConnections = mysql.createConnection({
    host: "server.blackloophosters.com",
    user: "sbkjapan_sbkjapanusr",
    password: "Bodrum123@456",
    database: "sbkjapan_db",
    multipleStatements: true,
    timeout: 3000,
  });
  mysqlConnections.connect((err) => {
    if (!err) {
      console.log("Connection Established Successfully");
      mysqlConnections.query("SELECT * FROM dummy", function (error, results, fields) {
        if (error) throw error;
        console.log("The solution is: ", results);
        res.send({
          solution: results,
        });
      });
    } else {
      console.log("Connection Failed!" + JSON.stringify(err, undefined, 2));
      res.send("bharwe");
    }
  });

  console.log("users route");
  // res.send("respond with a resource");
});

module.exports = router;
