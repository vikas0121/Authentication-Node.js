var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Registration' });
});

router.post('/register', function(req, res, next) {
  console.log(req.body);
  db(req.body);
  res.render('index', { title: 'Registration Complete.' });
});


module.exports = router;
