var trending_nav = $(".nav_link a");
var section = $(".section");
var boxImg = $(".box_img");
var shoeImg = $(".shoe_img");
$(".nav_link").eq(0).css("background-color", "red");
    trending_nav.on("click", function() {
        var card_id = $(this).html();
        for (var i = 0; i < section.length; i++) {
            if (section.eq(i).attr("id") == card_id) {
                section.eq(i).css("display", "flex");
                $(".nav_link").eq(i).css("background-color", "red");
            } else {
                section.eq(i).css("display", "none");
                $(".nav_link").eq(i).css("background-color", "rgb(231, 231, 231)");
            }
        }
    });

    $(".box_img").each(function() {
        var boxImg = $(".box_img");
        var shoeImg = $(".shoe_img");

        boxImg.on("mousemove", function(e) {
            // Get the position of the cursor relative to boxImg
            var offset = $(this).offset();
            var mouseX = e.pageX - offset.left;
            var mouseY = e.pageY - offset.top;
    
            // Calculate the center position of shoeImg
            var shoeImgWidth = shoeImg.width();
            var shoeImgHeight = shoeImg.height();
            
            var centerX = mouseX - shoeImgWidth / 2;
            var centerY = mouseY - shoeImgHeight / 2;
    
            // Check if the cursor is within the bounds of boxImg
            if (mouseX >= 0 && mouseX <= $(this).width() && mouseY >= 0 && mouseY <= $(this).height()) {
                shoeImg.css({
                    left: centerX + "px",
                    top: centerY + "px",
                    position: "absolute",
                    display: "block", // Ensure shoeImg is displayed
                    height: "35vh",
                    width: "20vw"
                });
            } else {
                shoeImg.css({
                    display: "none"
                });
            }
        });
    
        boxImg.on("mouseleave", function() {
            shoeImg.css({
                display: "none"
            });
        });
    });
    

    function scrolll() {
        var vw = $(window).width(); // Get the viewport width in pixels
        $('.trending_items_container').animate({ scrollLeft: '-=' + vw }, 100);
    };
    
    function scrollr() {
        var vw = $(window).width(); // Get the viewport width in pixels
        $('.trending_items_container').animate({ scrollLeft: '+=' + vw }, 100);
    };
    

const handleOnMouseMove = e => {
    const {currentTarget: target} = e;

    const rect = target.getBoundinfClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`)
    target.style.setProperty("--mouse-y", `${y}px`)
}