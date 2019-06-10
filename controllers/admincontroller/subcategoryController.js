const express=require('express');
const router=express.Router();
const SubCategory=require('../../models/subcategory');
const MainCategory=require('../../models/maincategory');



//----------------setting layout
 router.all('/*',(req,res,next)=>{
    req.app.locals.layout='admin';
   next();
 });

router.get('/admin/subcategory',(req,res)=>{
    SubCategory.find({})
.select('_id id name createdDate status MainCategoryName MainCategoryId')
.then(list=>{
   res.render('admin/subcategory/list',{data:list});
});
});
//--------------creating subcategory
router.get('/admin/create-subcategory/',(req,res)=>{
  
   MainCategory.find({})
         .select('_id name')
         .then(list=>{ 
         res.render('admin/subcategory/create',{data:list});
         });
      
   });

   router.post('/admin/create-subcategory/',(req,res)=>{
    var newSubCategory=new SubCategory({
      id:req.body.name,
      name:req.body.name,
      createdDate:Date.now(),
      status:true,
      MainCategoryId:req.body.mainCategoryaName,
      });
      newSubCategory.save((err)=>{
         if(err)
        res.render('admin/subcategory/create',{errors:err.errors});
       
         else
         res.redirect('/admin/subcategory');
      });
      
   });


//-----------------deleting subcategory

 router.post('/admin/delete-subcategory',(req,res)=>{
    let id=req.body.id;
    SubCategory.deleteOne({_id:id},(err)=>{
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