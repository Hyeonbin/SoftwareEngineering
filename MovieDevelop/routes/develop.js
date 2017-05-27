var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var pool = mysql.createPool({});

router.get('/', function(req, res, next) { // 관리자 로그인 페이지 나와야할 듯
  pool.getConnection(function(err, connection) {
    // 관리자 로그인 디비 쿼리 입력
    connection.query({
      // if문을 통해 에러 처리 및 콘솔창 출력
      res.render('developer_login', {}); // 데이터 전송
      connection.release();
    })
  })
});

router.get('/logindb_list', function(req, res, next) {
  pool.getConnection(function(err, connection) {
    // 로그인 디비 쿼리 입력
    connection.query({
      // if문을 통해 에러 처리 및 콘솔창 출력
      res.render('logindb', {}); // 데이터 전송
      connection.release();
    })
  })
});

router.get('/logindb_read/:idx', function(req, res, next) {
  var idx = req.param.idx; // 테이블 id값 변수에 저장

  pool.getConnection(function(err, connection) {
    // 로그인 디비 쿼리 입력
    connection.query({
      // if문을 통해 에러 처리 및 콘솔창 출력
      res.render('logindb_read', {}); // 데이터 전송
      connection.release();
    })
  })
});

router.get('/logindb_delete/:idx', function(req, res, next) {
  var idx = req.param.idx; // 테이블 id값 변수에 저장

  pool.getConnection(function(err, connection) {
    // 로그인 디비 쿼리 입력
    connection.query({
      // if문을 통해 에러 처리 및 콘솔창 출력
      res.render('logindb_delete', {}); // 데이터 전송
      connection.release();
    })
  })
});

router.get('/logindb_update', function(req, res, next) {
  var idx = req.param.idx; // 테이블 id값 변수에 저장

  pool.getConnection(function(err, connection) {
    // 로그인 디비 쿼리 입력
    connection.query({
      // if문을 통해 에러 처리 및 콘솔창 출력
      res.render('logindb_update', {}); // 데이터 전송
      connection.release();
    })
  })
});

router.get('/clientinfo_list', function(req, res, next) {
  pool.getConnection(function(err, connection) {
    // 로그인 디비 쿼리 입력
    connection.query({
      // if문을 통해 에러 처리 및 콘솔창 출력
      res.render('clientinfo', {}); // 데이터 전송
      connection.release();
    })
  })
});

router.get('/clientinfo_read/:idx', function(req, res, next) {
  var idx = req.param.idx; // 테이블 id값 변수에 저장

  pool.getConnection(function(err, connection) {
    // 로그인 디비 쿼리 입력
    connection.query({
      // if문을 통해 에러 처리 및 콘솔창 출력
      res.render('clientinfo_read', {}); // 데이터 전송
      connection.release();
    })
  })
});

router.get('/clientinfo_delete/:idx', function(req, res, next) {
  var idx = req.param.idx; // 테이블 id값 변수에 저장

  pool.getConnection(function(err, connection) {
    // 로그인 디비 쿼리 입력
    connection.query({
      // if문을 통해 에러 처리 및 콘솔창 출력
      res.render('clientinfo_delete', {}); // 데이터 전송
      connection.release();
    })
  })
});

router.get('/clientinfo_update', function(req, res, next) {
  var idx = req.param.idx; // 테이블 id값 변수에 저장

  pool.getConnection(function(err, connection) {
    // 로그인 디비 쿼리 입력
    connection.query({
      // if문을 통해 에러 처리 및 콘솔창 출력
      res.render('clientinfo_update', {}); // 데이터 전송
      connection.release();
    })
  })
});

router.get('/movieinfo_list', function(req, res, next) {
  pool.getConnection(function(err, connection) {
    // 로그인 디비 쿼리 입력
    connection.query({
      // if문을 통해 에러 처리 및 콘솔창 출력
      res.render('movieinfo', {}); // 데이터 전송
      connection.release();
    })
  })
});

router.get('/movieinfo_read/:idx', function(req, res, next) {
  var idx = req.param.idx; // 테이블 id값 변수에 저장

  pool.getConnection(function(err, connection) {
    // 로그인 디비 쿼리 입력
    connection.query({
      // if문을 통해 에러 처리 및 콘솔창 출력
      res.render('movieinfo_read', {}); // 데이터 전송
      connection.release();
    })
  })
});

router.get('/movieinfo_delete/:idx', function(req, res, next) {
  var idx = req.param.idx; // 테이블 id값 변수에 저장

  pool.getConnection(function(err, connection) {
    // 로그인 디비 쿼리 입력
    connection.query({
      // if문을 통해 에러 처리 및 콘솔창 출력
      res.render('movieinfo_delete', {}); // 데이터 전송
      connection.release();
    })
  })
});

router.get('/movieinfo_update', function(req, res, next) {
  var idx = req.param.idx; // 테이블 id값 변수에 저장

  pool.getConnection(function(err, connection) {
    // 로그인 디비 쿼리 입력
    connection.query({
      // if문을 통해 에러 처리 및 콘솔창 출력
      res.render('movieinfo_update', {}); // 데이터 전송
      connection.release();
    })
  })
});

router.post('/', function(req, res, next) {
  // 관리자 아이디 비번 변수에 저장

  pool.getConnection(function (err, connection) {
    // 로그인 디비 쿼리 입력
    connection.query( { // 관리자 아이디 비번 확인 작업

      connection.release();
    })
  })
});

router.post('/logindb_write', function(req, res, next) {
  // 로그인 디비에 저장할 데이터들 변수에 저장

  pool.getConnection(function (err, connection) {
    // 로그인 디비 쿼리 입력
    connection.query( {
      // if문을 통해 에러 처리 및 콘솔창 출력
      res.redirect('/logindb_list'); // logindb_list로 이동
      connection.release();
    })
  })
});

router.post('/logindb_delete', function(req, res, next) {
  var idx = req.param.idx; // 테이블 id값 변수에 저장

  pool.getConnection(function(err, connection) {
    // 로그인 디비 쿼리 입력
    connection.query({
      // if문을 통해 에러 처리 및 콘솔창 출력
      res.redirect('/logindb_list'); // logindb_list로 이동
      connection.release();
    }
  })
})

router.post('/logindb_update', function(req, res, next) {
  // 로그인 디비에 저장할 데이터들 변수에 저장

  pool.getConnection(function(err, connection) {
    // 로그인 디비 쿼리 입력
    connection.query({
      // if문을 통해 에러 처리 및 콘솔창 출력
      res.redirect('/logindb_list'); // logindb_list로 이동
      connection.release();
    });
  });
});

router.post('/clientinfo_write', function(req, res, next) {
  // 로그인 디비에 저장할 데이터들 변수에 저장

  pool.getConnection(function (err, connection) {
    // 로그인 디비 쿼리 입력
    connection.query( {
      // if문을 통해 에러 처리 및 콘솔창 출력
      res.redirect('/clientinfo_list'); // logindb_list로 이동
      connection.release();
    })
  })
});

router.post('/clientinfo_delete', function(req, res, next) {
  var idx = req.param.idx; // 테이블 id값 변수에 저장

  pool.getConnection(function(err, connection) {
    // 로그인 디비 쿼리 입력
    connection.query({
      // if문을 통해 에러 처리 및 콘솔창 출력
      res.redirect('/clientinfo_list'); // logindb_list로 이동
      connection.release();
    }
  })
})

router.post('/clientinfo_update', function(req, res, next) {
  // 로그인 디비에 저장할 데이터들 변수에 저장

  pool.getConnection(function(err, connection) {
    // 로그인 디비 쿼리 입력
    connection.query({
      // if문을 통해 에러 처리 및 콘솔창 출력
      res.redirect('/clientinfo_list'); // logindb_list로 이동
      connection.release();
    });
  });
});

router.post('/movieinfo_write', function(req, res, next) {
  // 로그인 디비에 저장할 데이터들 변수에 저장

  pool.getConnection(function (err, connection) {
    // 로그인 디비 쿼리 입력
    connection.query( {
      // if문을 통해 에러 처리 및 콘솔창 출력
      res.redirect('/movieinfo_list'); // logindb_list로 이동
      connection.release();
    })
  })
});

router.post('/movieinfo_delete', function(req, res, next) {
  var idx = req.param.idx; // 테이블 id값 변수에 저장

  pool.getConnection(function(err, connection) {
    // 로그인 디비 쿼리 입력
    connection.query({
      // if문을 통해 에러 처리 및 콘솔창 출력
      res.redirect('/movieinfo_list'); // logindb_list로 이동
      connection.release();
    }
  })
})

router.post('/movieinfo_update', function(req, res, next) {
  // 로그인 디비에 저장할 데이터들 변수에 저장

  pool.getConnection(function(err, connection) {
    // 로그인 디비 쿼리 입력
    connection.query({
      // if문을 통해 에러 처리 및 콘솔창 출력
      res.redirect('/logindb_list'); // logindb_list로 이동
      connection.release();
    });
  });
});
