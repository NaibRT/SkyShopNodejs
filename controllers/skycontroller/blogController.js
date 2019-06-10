const express = require('express');
var router = express.Router();




router.all('/*',(req,res,next)=>{
    req.app.locals.layout='main';
    next();
  });

router.get('/blog',(req,res)=>{
    res.render('skyviews/blog',{title:'Sky - Home'});
});
      

module.exports = router;
      