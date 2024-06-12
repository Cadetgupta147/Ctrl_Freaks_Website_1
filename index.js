var trending_nav = $(".nav_link a");
var featured_items = $(".featured_item");
var focus = $("#focus");
$(".nav_link").eq(0).css("background-color","red");
trending_nav.on("click",function(){
    var card_id = $(this).html();
    for(var i = 0; i < featured_items.length ;i++){
        if(featured_items.eq(i).attr("id") == card_id){
            featured_items.eq(i).css("display","block");
            $(".nav_link").eq(i).css("background-color","red");
        }
        else{
            featured_items.eq(i).css("display","none");
            $(".nav_link").eq(i).css("background-color","rgb(231, 231, 231)");
        }
    };
});
var mensCard = $(".mens_card")[0]; // Get the raw DOM element
var focus = $("#focus");

$(window).on("mousemove", function(e) {
    // Get mouse position relative to .mens_card
    var rect = mensCard.getBoundingClientRect();
    var mouseX = e.clientX - rect.left;
    var mouseY = e.clientY - rect.top;

    focus.css({
        left: mouseX + "px",
        top: mouseY + "px"
    });
});

// Shery.imageEffect("" ,{style:5, debug:true, gooey:true});
