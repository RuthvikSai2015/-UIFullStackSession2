var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.end('respond with a resource users');
});

router.post('/', function(req, res, next) {
  res.send('respond with a resource users post' );
});

module.exports = router;
