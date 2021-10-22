const  menu = document.querySelector(".menu i")
var list = document.querySelector(".nav-bar ul")
var items = document.querySelectorAll(".nav-bar ul li a");
menu.addEventListener('click',function(){
    list.classList.toggle('show-menu')
})
for (var i = 0 ; i< items.length ; i++){
    items[i].addEventListener('click',function(){
        list.classList.remove('show-menu')
    })
}
var contactus = document.querySelector(".contact-us-btn");
var contactpage = document.querySelector(".contactus-page");
var closecontact = document.querySelector(".contactus-page .close .bx-x");
contactus.addEventListener('click',function(){
    contactpage.classList.add('show-contact-page')
    document.querySelector('body').classList.add('delete-overflow')
})
closecontact.addEventListener('click',function(){
    contactpage.classList.remove('show-contact-page')
    document.querySelector('body').classList.remove('delete-overflow')
})
var sanadatbtn = document.querySelectorAll(".sanadat-btn")
var sanadatpage = document.querySelector(".sanadat-page")
var closesanadat = document.querySelector(".sanadat-page i")
var sanadat = document.querySelectorAll(".sanadat ul li a")
for ( var i = 0 ; i<sanadatbtn.length ; i++){
    sanadatbtn[i].addEventListener('click',function(){
        sanadatpage.classList.add('show-sanadat-page');
        document.querySelector('body').classList.add('delete-overflow')
    })
}
for (var i=0 ; i<sanadat.length; i++){
    sanadat[i].addEventListener('click',function(){
        sanadatpage.classList.add('show-sanadat-page');
        document.querySelector('body').classList.add('delete-overflow')
    })
}
closesanadat.addEventListener('click', function(){
    sanadatpage.classList.remove('show-sanadat-page');
    document.querySelector('body').classList.remove('delete-overflow')
})

var firstShow = document.querySelector(".first")
var secondShow = document.querySelector(".second")
var thirdShow = document.querySelector(".third")
var fourthShow = document.querySelector(".fourth")

firstShow.addEventListener('click',function(){
    document.querySelector(".first-year").classList.toggle("show-document")
    document.querySelector(".second-year").classList.remove("show-document")
    document.querySelector(".third-year").classList.remove("show-document")
    document.querySelector(".fourth-year").classList.remove("show-document")
})
secondShow.addEventListener('click',function(){
    document.querySelector(".second-year").classList.toggle("show-document")
    document.querySelector(".third-year").classList.remove("show-document")
    document.querySelector(".fourth-year").classList.remove("show-document")
    document.querySelector(".first-year").classList.remove("show-document")
})
thirdShow.addEventListener('click',function(){
    document.querySelector(".third-year").classList.toggle("show-document")
    document.querySelector(".fourth-year").classList.remove("show-document")
    document.querySelector(".first-year").classList.remove("show-document")
    document.querySelector(".second-year").classList.remove("show-document")
})
fourthShow.addEventListener('click',function(){
    document.querySelector(".fourth-year").classList.toggle("show-document")
    document.querySelector(".first-year").classList.remove("show-document")
    document.querySelector(".second-year").classList.remove("show-document")
    document.querySelector(".third-year").classList.remove("show-document")
})

$(document).ready(function() {
    $("#color-range").on("input change", function(){
        $("header").css("background-color",$(this).val());
        $(".home-up h2").css("color",$(this).val());
        $(".service h2").css("color",$(this).val());
        $("footer h1").css("color",$(this).val());
        
    })
})

var backgrounds = [
    'url(../images/happy-teacher-with-students-background.jpg)',
    'url(../images/young-colleagues-studying-together-for-college-exam.jpg)',
    'url(../images/little-girls-doing-online-school-together-at-home.jpg)'
]

var scrol = document.querySelector(".scroll")
var scrollright = document.querySelector(".bx-right-arrow-alt")
var scrollleft = document.querySelector(".bx-left-arrow-alt")
var i=1;
scrollright.addEventListener('click',change)
scrollleft.addEventListener('click',change)
function change(){
    scrol.classList.toggle("bg"+i);
    i++
    if(i>2) i=0;
     
}


setInterval(change,4000);
