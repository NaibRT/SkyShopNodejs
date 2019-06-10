const express = require('express');
var router = express.Router();




router.all('/*',(req,res,next)=>{
    req.app.locals.layout='main';
    next();
  });

  router.get('/register',(req,res)=>{
    console.log("res here");
  res.render('skyviews/register',{title:'Sky - Register'});
  });


  router.post('/register',(req,res)=>{
    var data= JSON.stringify(req.body);
    console.log(data);
     res.redirect('skyviews/login');
 
   });
      

module.exports = router;
      