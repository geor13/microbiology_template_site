
var downSlideIndex = 0;

if (window.innerWidth <= 950){
    showdownSlides();
}


function showdownSlides(){
    var i;
    var slides = document.getElementsByClassName("personell-image");

    for(i=0; i< slides.length ; i++){
        slides[i].style.display = "none";
    }

    downSlideIndex++;


    if(downSlideIndex > slides.length){downSlideIndex = 1}

    slides[downSlideIndex-1].style.display ="flex";

    setTimeout(showdownSlides,2000);
}












