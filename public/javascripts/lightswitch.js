let mode = "dark"

function switchMode(title){

    if(mode == "dark"){
        document.getElementsByClassName("container")[0].style.backgroundColor = "whitesmoke";
        document.body.style.backgroundColor = "whitesmoke";
        document.getElementsByTagName("footer")[0].style.color = "black";
        
        if(document.title == "Registration" || document.title == "Login"){
            document.getElementsByClassName("pageLayout")[0].style.backgroundColor = "whitesmoke";
        }

        if(document.title == "Workouts"){
            document.getElementsByClassName("workout-card").style.backgroundColor="whitemsoke";
            let cards = document.getElementsByClassName(".card-body");
            for (var i = 0; i < cards.length; i++) {
                cards[i].style.backgroundColor="whitesmoke";
            }
        }


        mode = "light";
    }
    else{
        document.getElementsByClassName("container")[0].style.backgroundColor = "#292929";
        document.getElementsByClassName("pageLayout")[0].style.backgroundColor = "#292929";
        document.body.style.backgroundColor = "#292929";
        document.getElementsByTagName("footer")[0].style.color = "white";

        if(document.title == "Registration" || document.title == "Login"){
            document.getElementsByClassName("pageLayout")[0].style.backgroundColor = "#292929";
        }

        mode = "dark";
    }


    
    if(document.title == "Workouts"){

    }

    console.log(title);

   
    

}