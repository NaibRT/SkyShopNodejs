const mongoose=require('mongoose');
const schema=mongoose.Schema;
const subcategorySchema=new schema({
    id:{type:String,required:true,unique:true},
    name:{type:String,required:true},
    createdDate:{type:Date,required:true},
    status:{type:Boolean,required:true},
    MainCategoryId:{type:String,required:true},
   // MainCategoryName:{type:String,required:true}
});

const SubCategory=mongoose.model('subcategory',subcategorySchema);
module.exports= SubCategory;