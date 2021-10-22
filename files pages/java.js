$(document).ready(function() {
    $("#color-range").on("input change", function(){
        $("header").css("background-color",$(this).val());
        $(".pdf a").css("background",$(this).val())
        $("footer h1").css("color",$(this).val());

        console.log("hello")
    })
})
