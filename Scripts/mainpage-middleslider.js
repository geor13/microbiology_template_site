var middleslideIndex =0;

showmiddleSlides();

function showmiddleSlides(){
    var i;
    var middleslides = document.getElementsByClassName("lab-image");
    var dots = document.getElementsByClassName("teleia");


    for(i = 0; i< middleslides.length; i++){
        middleslides[i].style.display = "none";
    }

    middleslideIndex ++;

    if(middleslideIndex > middleslides.length) {middleslideIndex = 1}

    for(i =0; i < dots.length ; i++){
        dots[i].className = dots[i].className.replace(" teleia-selected", "");
    }

    middleslides[upslideIndex-1].style.display="block";
    dots[middleslideIndex -1].className +=" teleia-selected";
    setTimeout(showmiddleSlides,2000);
}