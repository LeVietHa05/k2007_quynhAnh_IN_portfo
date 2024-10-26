var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendFile('views/index.html', { root: 'public' });
});
router.get('/dulce', function (req, res, next) {
  res.sendFile('views/dulce.html', { root: 'public' });
});
router.get('/trace', function (req, res, next) {
  res.sendFile('views/trace.html', { root: 'public' });
});
router.get('/insideout', function (req, res, next) {
  res.sendFile('views/insideout.html', { root: 'public' });
});

module.exports = router;
