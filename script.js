
class Menu{
    menuMobile(){
        let menu_click = document.querySelector(".img_menu_2")
        let menu_mobile = document.querySelector(".menu_mobile")
        let menu_twoclick = document.querySelector(".img_menu")
        menu_click.addEventListener('click', ()=>{   
            menu_mobile.classList.add("menu_mobile_toggle")
            menu_click.style.display = "none"
        })

        menu_twoclick.addEventListener('click',()=>{
            menu_mobile.classList.remove("menu_mobile_toggle")
            menu_click.style.display = "inline"
        })
        
        
    }
}

let menu = new Menu()
menu.menuMobile()

