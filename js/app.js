setInterval(function(){
    // document.querySelector(".slider_one").duration = 2;
    // document.querySelector(".slider_two").duration = 2;
    // document.querySelector(".slider_three").duration = 2;

    if(document.querySelector(".slider_one").classList.contains("active")){
        document.querySelector(".slider_two").className +=" active";
        document.querySelector(".slider_one").classList.remove("active");
    }
    else if(document.querySelector(".slider_two").classList.contains("active")){
        document.querySelector(".slider_three").className +=" active";
        document.querySelector(".slider_two").classList.remove("active");
    }
    else if(document.querySelector(".slider_three").classList.contains("active")){
        document.querySelector(".slider_one").className +=" active";
        document.querySelector(".slider_three").classList.remove("active");
    }
    
},3000);
