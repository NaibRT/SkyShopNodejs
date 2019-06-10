const express=require('express');
const router=express.Router();

 router.all('/*',(req,res,next)=>{
     req.app.locals.layout='admin';
    next();
 });

 router.get('/admin',(req,res)=>{
     res.render('admin/dashboard');
 });

 module.exports=router;