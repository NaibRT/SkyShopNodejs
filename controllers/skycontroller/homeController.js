const express = require('express');
var router = express.Router();
const mainCat=require('../../models/maincategory');



router.all('/*',(req,res,next)=>{
    req.app.locals.layout='main';
    next();
  });

router.get('/',(req,res)=>{
  mainCat.find({status:'true'}).select('_id id name').then(list=>{
     res.render('skyviews/index',{title:'Sky - Home',mainCatList:list});
  });
    
});


      

module.exports = router;
      