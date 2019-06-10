const mongoose=require('mongoose');
const schema=mongoose.Schema;
const categorySchema=new schema({
    id:{type:String,required:true,unique:true},
    name:{type:String,required:true},
    createdDate:{type:Date,required:true},
    status:{type:Boolean,required:true},
    mainCategoryId:{type:String,required:true}
});

const Category=mongoose.model('category',categorySchema);
module.exports= Category;