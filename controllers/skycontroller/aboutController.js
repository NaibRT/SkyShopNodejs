const express = require('express');
var router = express.Router();




router.all('/*',(req,res,next)=>{
    req.app.locals.layout='main';
    next();
  });

router.get('/about',(req,res)=>{
    res.render('skyviews/about',{title:'Sky - Home'});
});
      

module.exports = router;
      