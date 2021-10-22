$(document).ready(function() {
    $("#color-range").on("input change", function(){
        $("header").css("background-color",$(this).val());
        $(".pdf a").css("background",$(this).val())
        $("footer").css("background",$(this).val());

        console.log("hello")
    })
})
