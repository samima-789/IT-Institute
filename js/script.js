let btnsearch = document.querySelector("#search")
let btnsearch2 = document.querySelector("#search1")
let searchbar = document.querySelector(".search-bar")
let close = document.querySelector("#close")


btnsearch.addEventListener("click",function(){
    searchbar.classList.toggle("show_searchbar")
})

btnsearch2.addEventListener("click",function(){
    searchbar.classList.toggle("show_searchbar")
})

close.addEventListener("click",function(){
    searchbar.classList.toggle("show_searchbar")
})


let btn_form =document.querySelector("#btn_form")
let btn_form2 =document.querySelector("#btn_form2")
let form =document.querySelector(".form")
let close_form =document.querySelector("#close_form")

btn_form.addEventListener("click",function(){
    form.classList.toggle("show_form")
})

btn_form2.addEventListener("click",function(){
    form.classList.toggle("show_form")
})

close_form.addEventListener("click",function(){
    form.classList.toggle("show_form")
})

let menu = document.querySelector("ul")
let bars = document.querySelector("fa-solid fa-bars")

bars.addEventListener("click",function(){
    menu.classList.toggle("show_menu")
})
