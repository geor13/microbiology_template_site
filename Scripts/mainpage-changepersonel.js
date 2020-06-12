var doctors = document.getElementsByClassName("personel-button");

var counter =0;
for(i=0; i<doctors.length; i++){
    doctors[i].addEventListener('click', function() {

        counter = i;


        console.log('Helloooooooo');

        this.className +=" selected-button";

        MyFunction(this.id);
        

        
    });
}

function MyFunction(classid){

    console.log("the index is :" + classid);

    if(classid == "button2"){
        document.getElementById("button1").className = "personel-button";
        document.getElementById("image1").style.display ="none";
        document.getElementById('image2').style.display="flex";
    }

    if(classid == "button1"){
        document.getElementById("button2").className = "personel-button";
        document.getElementById("image2").style.display ="none";
        document.getElementById('image1').style.display="flex";
    }


}

