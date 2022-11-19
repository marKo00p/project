const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/features', function(req, res, next) {
  res.render('features',{title:'Some new things'});
});

module.exports = router;
