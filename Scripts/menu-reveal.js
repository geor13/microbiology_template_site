menuIcon = document.getElementById("mobile-menu-wrapper");
theMenu = document.getElementById("mobile-menu-categories");

list = theMenu.querySelectorAll("a");
console.log(list);


menuIcon.addEventListener("click", function(){

    console.log("JUST CLICKED");



    if(window.innerWidth <=950 && window.innerWidth >480){
        console.log("TABLET MENU");
   
        theMenu.classList.toggle("tablet-visible");
       // theMenu.classList.toggle("tablet-menu-animation");

      /*  for(var i =0; i<list.length; i++){
            list[i].classList.toggle("tablet-menu-animation");
        }
        */
    
    }
     else if(window.innerWidth<=480){
    
        theMenu.classList.toggle("mobile-visible");
        //theMenu.classList.toggle("mobile-menu-animation");
        console.log("MOBILE MENU");

       /* for(var i =0; i<list.length; i++){
            list[i].classList.toggle("mobile-menu-animation");
        }
        */
     }
});