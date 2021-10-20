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
var closecontact = document.querySelector(".close .bx-x");
contactus.addEventListener('click',function(){
    contactpage.classList.add('show-contact-page')
    document.querySelector('body').classList.add('delete-overflow')
})
closecontact.addEventListener('click',function(){
    contactpage.classList.remove('show-contact-page')
    document.querySelector('body').classList.remove('delete-overflow')
})