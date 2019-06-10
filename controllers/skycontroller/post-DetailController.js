const express = require('express');
var router = express.Router();




router.all('/*',(req,res,next)=>{
    req.app.locals.layout='main';
    next();
  });

  router.get('/post-detail',(req,res)=>{
    res.render("skyviews/post-detail",{title:'Sky - Post_Detail'});
    });
      

module.exports = router;
      