var examcategories = document.getElementsByClassName("exam");

for(i=0; i<examcategories.length ; i++){

    examcategories[i].addEventListener('click' ,function(){

        this.className +=" focused";

        changeListStyle(this);

        changeListSection(this);

    });
}

function changeListStyle(focusedElement){
    for(i=0; i<examcategories.length ; i++){

        if(examcategories[i].classList.contains("focused") ){

            if(examcategories[i].classList != focusedElement.classList){
                examcategories[i].classList.remove("focused");
            }
        }
    }
}

function changeListSection(elementFocused){

    var exams = document.getElementsByClassName("exam-container");

    for(i =0; i< exams.length; i++){

        if(!elementFocused.classList.contains(exams[i].id)){
            exams[i].style.display = "none";
        }else{
            exams[i].style.display="block";
        }
    }

}