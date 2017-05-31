var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit: 5,
  host: 'localhost',
  user: 'root',
  database: 'theater',
  password: 'cndgus78'
});

router.get('/', function(req, res, next) {
  pool.getConnection(function (err, connection) {
    // Use the connection
    var sqlForSelectList = "SELECT * FROM movieinfo ORDER BY people DESC";

    connection.query(sqlForSelectList, function (err,rows) {
      if (err) console.error("err : " + err);
      console.log("rows : " + JSON.stringify(rows));

      var sqlForSelectList2 = "SELECT * FROM movieinfo WHERE ing=0 ORDER BY openday DESC";

      connection.query(sqlForSelectList2, function (err,rows2) {
        if (err) console.error("err : " + err);
        console.log("rows2 : " + JSON.stringify(rows2));

        var sqlForSelectList3 = "SELECT * FROM movieinfo WHERE ing=1 ORDER BY openday ";

        connection.query(sqlForSelectList3, function (err,rows3) {
          if (err) console.error("err : " + err);
          console.log("rows3 : " + JSON.stringify(rows3));

          var sqlForSelectList4 = "SELECT * FROM clientinfo ORDER BY loginok DESC";

          connection.query(sqlForSelectList4, function (err,loginsignal) {
            if (err) console.error("err : " + err);
            console.log("loginsignal : " + JSON.stringify(loginsignal));

            var sqlForSelectList5 = "SELECT * FROM logindb";

            connection.query(sqlForSelectList5, function (err,loginsignal2) {
              if (err) console.error("err : " + err);
              console.log("loginsignal2 : " + JSON.stringify(loginsignal2));

              res.render('developer_login', {title: ' 영화 정보', rows: rows, rows2:rows2, rows3:rows3, loginsignal:loginsignal, loginsignal2:loginsignal2});
            // Don't use the connection here, it has been returned to the pool.
            });
          // Don't use the connection here, it has been returned to the pool.
          });
        // Don't use the connection here, it has been returned to the pool.
        });

        // Don't use the connection here, it has been returned to the pool.
      });
    connection.release();
    });
  });
});

module.exports = router;