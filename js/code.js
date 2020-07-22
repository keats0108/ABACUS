const resizeLanding = () => {
    var navHeight = $(".navbar").first().outerHeight();
    var background_height = Math.min($("#image1").outerHeight() - navHeight, $(window).height() - navHeight);
    
    // $(".title-text").css("height", background_height);
    console.log(navHeight)
    $(".landing").css("height", background_height);
}

$(document).ready(
    function(){
        resizeLanding()
    }
)

$(window).on("resize", function(){
    resizeLanding();
})