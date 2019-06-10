const express=require('express');
const router=express.Router();
const mainCat=require('../../models/maincategory');



//setting layout
 router.all('/*',(req,res,next)=>{
    req.app.locals.layout='admin';
   next();
 });

router.get('/admin/main-category',(req,res)=>{
mainCat.find({})
.select('_id id name createdDate status')
.then(list=>{
   res.render('admin/maincategory/list',{data:list});
});
});
//creating main category
router.get('/admin/create-main-category/',(req,res)=>{
 
      res.render('admin/maincategory/create');
   });

   router.post('/admin/create-main-category/',(req,res)=>{
      var data=req.body.name;
    var mainC=new mainCat({
         id:data,
         name:data,
         createdDate:Date.now(),
         status:true

      });
      mainC.save((err)=>{
         if(err)
        res.render('admin/maincategory/create',{errors:err.errors});
       
         else
         res.redirect('/admin/main-category');
      });
      
   });


//deleting main category

 router.post('/admin/delete-main-category',(req,res)=>{
    let id=req.body.id;
       mainCat.deleteOne({_id:id},(err)=>{
        if(err)
          return res.status(500).json({
           status:500,
           errors:err.errors
          });
       else
          return res.status(200).json({
            status:200,
            message:'succesfuly deleted'
          });
       });
 });

module.exports=router;