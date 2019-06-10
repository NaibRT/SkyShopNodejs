


let RenderMainCategory=(list)=>{
for(var x of list.mainCatList){
content=`<li><a href="/product-listing" class="MainCat" >${x.name}</a></li>`;
$(".MainCatMega").append(content);
}
};

let RenderCategory=(list)=>{
    for(var x of list.catList){
        content=`<li><a href="/product-listing" style="text-decoration: none;display: block;">${x.name}</a></li>`;
        $(".CatMega").append(content);
        }

};


$(document).ready(()=>{
    console.log("click");


});
$.ajax({
    type: "Post",
    url: "/getMainCat",
    success: function (response) {
       console.log(response); 
      RenderMainCategory(response);
    }
});

$.ajax({
    type: "Post",
    url: "/getCategory",
    success: function (response) {
       console.log(response); 
      RenderCategory(response);
    }
});



$(".MainCat").hover(function () {
        
    $.ajax({
        type: "Post",
        url: "/getSubCat",
        success: function (response) {
           console.log(response); 
           RenderMainCategory(response);
        }
    }); 
});