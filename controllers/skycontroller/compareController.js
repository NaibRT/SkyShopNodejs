const express = require('express');
var router = express.Router();




router.all('/*',(req,res,next)=>{
    req.app.locals.layout='main';
    next();
  });

    
  router.get('/compare',(req,res)=>{
    res.render('skyviews/compare',{title:'Sky - Compare'});
  });

module.exports = router;
      