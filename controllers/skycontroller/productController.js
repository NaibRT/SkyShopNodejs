const express = require('express');
var router = express.Router();




router.all('/*',(req,res,next)=>{
    req.app.locals.layout='main';
    next();
  });

router.get('/product',(req,res)=>{
    res.render('skyviews/product-listing',{title:'Sky - Home'});
});
      

module.exports = router;
      