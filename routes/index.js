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

router.get('/battrang', function (req, res, next) {
  res.sendFile('views/battrang.html', { root: 'public' });
});
router.get('/vanphuc', function (req, res, next) {
  res.sendFile('views/vanphuc.html', { root: 'public' });
});
router.get('/thachxa', function (req, res, next) {
  res.sendFile('views/thachxa.html', { root: 'public' });
});
router.get('/vanphuc2', function (req, res, next) {
  res.sendFile('views/vanphuc2.html', { root: 'public' });
});
router.get('/lemat', function (req, res, next) {
  res.sendFile('views/lemat.html', { root: 'public' });
});
router.get('/nhattan', function (req, res, next) {
  res.sendFile('views/nhattan.html', { root: 'public' });
});

module.exports = router;
