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

/* GET home page. */
router.get('/', function(req, res, next) {
	pool.getConnection(function (err, connection) {
		// Use the connection
		var sqlForSelectList = "SELECT * FROM movieinfo ORDER BY people DESC";
		var whoForSelect = ""
		
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
							res.render('index', {title: ' 영화 정보', rows: rows, rows2:rows2, rows3:rows3, loginsignal:loginsignal, loginsignal2:loginsignal2});
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

router.post('/', function(req,res,next){
	var userid = req.body.user_id;
	var password = req.body.password;
	var logoutsignal = req.body.logout_signal;
	var logoutid = req.body.logout_id;

	pool.getConnection(function (err, connection) {
		// Use the connectio
		//SET @userid = req.body.user_id;
		var sqlForlogin = "SELECT * FROM clientinfo WHERE id='"+userid+"'";
		var sqlForlogin2 = "UPDATE logindb set login=1";
		var sqlForlogin3 = "UPDATE logindb set login=0";
		var sqlForlogin4 = "UPDATE clientinfo set loginok = '1' where id = '" +userid+ "'";
		var sqlForlogin5 = "UPDATE clientinfo set loginok = '0' where id = '" +logoutid+ "'";

		console.log(sqlForlogin);
		console.log(userid);
		console.log("logout : " + logoutid);
		connection.query(sqlForlogin, function(err, result){
			if(err) console.error("err : " + err);
			console.log("result : " + JSON.stringify(result));

			connection.query(sqlForlogin3, function(err, resultlogout){
				if(err) console.error("err : " + err);
				console.log("resultlogout : " + JSON.stringify(resultlogout));

				if(logoutsignal == 1){
					connection.query(sqlForlogin5, function(err, result5){
						if(err) console.error("err : " + err);
						console.log("result5 : " + JSON.stringify(result5));
					})
					res.redirect('/');
				}
				else{
					if(result.length == 0){
						res.send("<script> alert('존재하지 않는 아이디 입니다.');history.back();</script>");
					}
					else{
						if(result[0].passwd !== password){
							res.send("<script> alert('비밀번호가 틀렸습니다.');history.back();</script>");
						}
						else{
							connection.query(sqlForlogin2, function(err, result2){
								if(err) console.error("err : " + err);
								console.log("result2 : " + JSON.stringify(result2));
							})
							connection.query(sqlForlogin4, function(err, result4){
								if(err) console.error("err : " + err);
								console.log("result4 : " + JSON.stringify(result4));
							})
							res.redirect('/');	
						}
					}
				}
				
			});
			connection.release();
		});
	});
});

router.get('/book', function(req, res, next) {
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
							res.render('book', {title: ' 영화 정보', rows: rows, rows2:rows2, rows3:rows3, loginsignal:loginsignal, loginsignal2:loginsignal2});
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

router.get('/movie', function(req, res, next) {
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
							res.render('movie', {title: ' 영화 정보', rows: rows, rows2:rows2, rows3:rows3, loginsignal:loginsignal, loginsignal2:loginsignal2});
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

router.get('/theater', function(req, res, next) {
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
							res.render('theater', {title: ' 영화 정보', rows: rows, rows2:rows2, rows3:rows3, loginsignal:loginsignal, loginsignal2:loginsignal2});
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

router.get('/store', function(req, res, next) {
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
							res.render('store', {title: ' 영화 정보', rows: rows, rows2:rows2, rows3:rows3, loginsignal:loginsignal, loginsignal2:loginsignal2});
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

router.get('/customer', function(req, res, next) {
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
							res.render('customer', {title: ' 영화 정보', rows: rows, rows2:rows2, rows3:rows3, loginsignal:loginsignal, loginsignal2:loginsignal2});
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

router.get('/mypage', function(req, res, next) {
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
							res.render('mypage', {title: ' 영화 정보', rows: rows, rows2:rows2, rows3:rows3, loginsignal:loginsignal, loginsignal2:loginsignal2});
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
