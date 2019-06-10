const express = require('express');
var router = express.Router();




router.all('/*',(req,res,next)=>{
    req.app.locals.layout='main';
    next();
  });

  router.get('/cart',(req,res)=>{
    res.render('skyviews/cart',{title:'Sky - Cart'});
   });
      

module.exports = router;
      