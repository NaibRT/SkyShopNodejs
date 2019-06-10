const express = require('express');
var router = express.Router();




router.all('/*',(req,res,next)=>{
    req.app.locals.layout='main';
    next();
  });

    
  router.get('/wishlist',(req,res)=>{
    res.render('skyviews/wishlist',{title:'Sky - Wishlist'});
  });

module.exports = router;
      