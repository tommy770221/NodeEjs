var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/doctor-schedule.html', function(req, res, next) {
    res.render('templateShow/docter-schedule', { title: 'Express' });
});

module.exports = router;
