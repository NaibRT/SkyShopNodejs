const express=require('express');
const router=express.Router();
const Category=require('../../models/category');
const MainCategory=require('../../models/maincategory');
const Genders=require('../../models/Gender');



//setting layout
 router.all('/*',(req,res,next)=>{
    req.app.locals.layout='admin';
   next();
 });





router.get('/admin/category',(req,res)=>{
    Category.find({})
.select('_id id name createdDate status mainCategoryId')
.then(list=>{
    console.log(list);
   res.render('admin/category/list',{data:list});
});
});



//creating  category
router.get('/admin/create-category/',(req,res)=>{
 MainCategory.find({})
              .select("_id name")
              .then(list=>{
               res.render('admin/category/create',{mainCategoryList:list});
              });
      
   });

router.post('/admin/create-category/',(req,res)=>{
    var newCategory=new Category({
         id:req.body.name,
         name:req.body.name,
         createdDate:Date.now(),
         status:true,
         mainCategoryId:req.body.mainCategoryId
      });
      newCategory.save((err)=>{
         if(err)
        res.render('admin/category/create',{errors:err.errors});
       
         else
         res.redirect('/admin/category');
      });
      
   });


//deleting category

 router.post('/admin/delete-category',(req,res)=>{
    let id=req.body.id;
    Category.deleteOne({_id:id},(err)=>{
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