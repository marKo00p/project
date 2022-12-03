const express = require('express');
const client_service = require("../services/client_service");
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/home');
});

router.get('/home', function(req, res, next) {
  res.render('home',{title:'Shoppy Shop'});
});

router.get('/services', function(req, res, next) {
  res.render('services',{title:'Services'});
});

router.get('/clients', function(req, res, next) {
  res.render('clients',{title:'Clients'});
});

router.get('/cart', function(req, res, next) {
  res.render('cart',{title:'Cart'});
});

router.get('/catalogue', function(req, res, next) {
  res.render('catalogue',{title:'Catalogue'});
});

router.get('/statistics', function(req, res, next) {
  res.render('statistics',{title:'Statistics'});
});

router.get('/login', function(req, res, next) {
  res.render('login',{title:'Login'});
});

router.get('/sign_up', function(req, res, next) {
  res.render('sign_up',{title:'Sign_up'});
});

router.get('/product_card', function(req, res, next) {
  res.render('product_card',{title:'Product_card'});
});

router.get('/order', function(req, res, next) {
  res.render('order',{title:'Order'});
});

router.get('/clients_list', function(req, res, next) {
  client_service.getClients().then(result =>{
  res.send({data: result });
  })
});
module.exports = router;
