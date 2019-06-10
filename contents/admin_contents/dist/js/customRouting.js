


$(document).ready(()=>{
//remove main category
 $('.remove').click(function (e) { 
     e.preventDefault();
     var currentid=$(this).attr('data_id');
     var currentPath=$(this).attr('data_path');
     var item=$(this).parent().parent();
     removigData(currentid,currentPath,item);
     });

let removigData=(id,path,item)=>{
    $.ajax({
        type: "Post",
        url: path,
        data:{id:id},
        success: function (res) {
         if(res.status==200){
           
         alert(res.message);
         $(item).remove();
         }
         else
          console.log(res.errors);
        }
    }); 
};





});
