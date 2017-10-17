var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Registration' });
});

router.post('/register', function(req, res, next) {
  console.log(req.body);
  if(req.body.username === '' && req.body.email === '' && req.body.password === '' && req.body.passwordMatch === ''){
  alert('Please check details.');
}
else{
    db(req.body);
}
  res.render('index', { title: 'Registration Complete.' });
});


module.exports = router;
