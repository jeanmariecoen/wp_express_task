var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.get('/tasks', function(req, res, next) {
  res.render('tasks', { title: 'Tâches' });
});

router.get('/equipe', function(req, res, next) {
  res.render('equipe', { title: 'Équipe' });
});

router.get('/documentation', function(req, res, next) {
  res.render('documentation', { title: 'Documentation' });
});

module.exports = router;
