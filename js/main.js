let iconBurger =document.querySelector(".iconBurger")
let navList =document.querySelector(".navList")
iconBurger.addEventListener("click",()=>{
    navList.classList.toggle("active")
})