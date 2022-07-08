var menu_click = document.querySelector(".img_menu_2")
var menu_twoclick = document.querySelector(".img_menu")
var nav = document.querySelector("#nav")
menu_click.addEventListener('click', ()=>{   
nav.style.display = "flex"
})

menu_twoclick.addEventListener('click', () =>{
    nav.style.display = "none"
})