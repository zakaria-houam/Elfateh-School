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
        console.log("hello")
    })
})

var backgrounds = [
    'url(../images/247023086_1089473058527295_1913885115251171417_n.png)',
    'url(../images/247478604_212454510977143_7332679434152108201_n.png)',
    'url(../images/248097228_227616662691387_1972052704564402905_n.png)'
]
var scrol = document.querySelector(".scroll")
var scrollright = document.querySelector(".bx-right-arrow-alt")
var scrollleft = document.querySelector(".bx-left-arrow-alt")
var i=1;
scrollright.addEventListener('click',function(){
    scrol.style.background = backgrounds[i];
     scrol.style.backgroundSize= 'cover';
     scrol.style.backgroundPosition= 'center';
     
    
     i++;
     if(i>3) i=0;
})
scrollleft.addEventListener('click',function(){
    scrol.style.background = backgrounds[i];
     scrol.style.backgroundSize= 'cover';
     scrol.style.backgroundPosition= 'center';
     
    
     i--;
     if(i<=0) i=3;
})
function changebg(){
     scrol.style.background = backgrounds[i];
     scrol.style.backgroundSize= 'cover';
     scrol.style.backgroundPosition= 'center';
     
    
     i++;
     if(i>3) i=0;
     
    
}

setInterval(changebg,4000);
