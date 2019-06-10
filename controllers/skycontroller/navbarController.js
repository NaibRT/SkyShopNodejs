const express = require('express');
var router = express.Router();
const mainCat=require('../../models/maincategory');
const Category=require('../../models/category');



router.all('/*',(req,res,next)=>{
    req.app.locals.layout='main';
    next();
  });

  router.post('/getMainCat',(req,res)=>{
    mainCat.find({status:'true'}).select('_id id name').then(list=>{
       res.json({mainCatList:list});
    });
      
  });

  router.post('/getCategory',(req,res)=>{
    Category.find({status:'true'}).select('_id id name').then(list=>{
       res.json({catList:list});
    });
      
  });
      

module.exports = router;
      