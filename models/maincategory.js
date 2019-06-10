const mongoose=require('mongoose');

const schema=mongoose.Schema;
const maincategorySchema=new schema({
    id:{type:String,required:true,unique:true},
    name:{type:String,required:true},
    createdDate:{type:Date,required:true},
    status:{type:Boolean,required:true}
});

const mainCategory=mongoose.model('mainCategory',maincategorySchema);
module.exports= mainCategory;