var trending_nav = $(".nav_link a");
var featured_items = $(".featured_item");
trending_nav.on("click",function(){
    var card_id = $(this).html();
    for(var i = 0; i < featured_items.length ;i++){
        if(featured_items.eq(i).attr("id") == card_id){
            featured_items.eq(i).css("display","block");
        }
        else{
            featured_items.eq(i).css("display","none");
        }
    };
});