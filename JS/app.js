let burger=document.querySelector(".burger");
let menu=document.querySelector(".menu");
let list=document.querySelector(".list")

burger.addEventListener('click',()=>{
    burger.classList.toggle("toggle");
    menu.classList.toggle("nav-active");
})


list.forEach((links,index)=>{
    links.style.animation=`listFade 0.5s ease forwords ${index/7+1}s`;
})