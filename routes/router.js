var express = require('express');
var router = express.Router();

/* GET string. */
router.get('/', function(req, res, next) {
  res.render('get', {string: 'Testing'});
});


/* POST string. */
router.post('/', function(req, res, next) {
  const str = req.body.string;
  const length = str.length;
  res.render('post', {string: str, len: length});
});
module.exports = router;
