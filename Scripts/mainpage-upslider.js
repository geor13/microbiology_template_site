var upslideIndex =0;

showupSlides();

function showupSlides(){
    var i;
    var upslides = document.getElementsByClassName("image-wrapper");
    var teleies = document.getElementsByClassName("dot");


    for(i = 0; i< upslides.length; i++){
        upslides[i].style.display = "none";
    }

    upslideIndex ++;

    if(upslideIndex > upslides.length) {upslideIndex = 1}

    for(i =0; i < teleies.length ; i++){
        teleies[i].className = teleies[i].className.replace(" dot-selected", "");
    }

    upslides[upslideIndex-1].style.display="block";
    teleies[upslideIndex -1].className +=" dot-selected";
    setTimeout(showupSlides,2000);
}