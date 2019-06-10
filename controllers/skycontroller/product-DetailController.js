const express = require('express');
var router = express.Router();




router.all('/*',(req,res,next)=>{
    req.app.locals.layout='main';
    next();
  });

   
  router.get('/product-detail',(req,res)=>{
    res.render('skyviews/product-detail',{title:'Sky - Product_Detail'});
  });
      

module.exports = router;
      