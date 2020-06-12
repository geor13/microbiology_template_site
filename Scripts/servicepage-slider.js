var slider = document.getElementById("infos-container");
var button = document.getElementById("icon-next");



button.addEventListener("click", function(){


        console.log("button pressed !!!");
        slider.classList.toggle("transformation");
        button.classList.toggle("rotation");


  
});