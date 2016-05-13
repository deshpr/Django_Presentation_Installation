var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


router.get('/index', function(req, res, next){
    res.render('home', {});
})

router.get('/macinstall', function(req, res, next){
   
  res.render('macinstall', {});    
});

router.get('/wininstall', function(req, res, next){
   
  res.render('wininstall', {});    
});

module.exports = router;
