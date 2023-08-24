window.onload = function(){
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
    
    
    //criando efeito scroll
    
    const debounce = function(func, wait, immediate) {
        let timeout;
        return function(...args) {
          const context = this;
          const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
          const callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
      };
    
    const target = document.querySelectorAll("[data-anime]")
    const animationClass = "animated"
    
    function animeScroll(){
        const windowTop = window.pageYOffset + ((window.innerHeight*3) / 4)
        
        target.forEach(
            function(element){
                console.log(element.pageYOffset)
                if(windowTop > element.offsetTop){
                    element.classList.add(animationClass)
                }else{
                    element.classList.remove(animationClass)
                }
            }
        )
    }
    
    if(target.length){
        window.addEventListener("scroll", debounce(()=>{
            animeScroll()
            console.log("tes")
        },200))
    }
    
    animeScroll()    

    
}


