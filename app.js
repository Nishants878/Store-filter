const complete = document.getElementById("all");
const navCake = document.getElementById("cakes-nav");
const navCup = document.getElementById("cup");
const navDough = document.getElementById("dough");
const navSweet =document.getElementById("sweet-nav");


const selectCake = document.getElementsByClassName("cake");
const selectDough = document.getElementsByClassName("doughnut");
const selectSweet = document.getElementsByClassName("sweet");
const selectCup = document.getElementsByClassName("cupcake");

all.addEventListener("click", function(){

    
    for(var i =0; i<selectDough.length; i++){
   selectDough[i].style.display ="block"
    };
    for(var i =0; i<selectSweet.length; i++){
       selectSweet[i].style.display ="block"
        };
        for(var i =0; i<selectCup.length; i++){
           selectCup[i].style.display ="block"
            };
            for(var i =0; i<selectCake.length; i++){
               selectCake[i].style.display ="block"
                };
        
});

navCake.addEventListener("click", function(){

    
     for(var i =0; i<selectDough.length; i++){
    selectDough[i].style.display ="none"
     };
     for(var i =0; i<selectSweet.length; i++){
        selectSweet[i].style.display ="none"
         };
         for(var i =0; i<selectCup.length; i++){
            selectCup[i].style.display ="none"
             };
             for(var i =0; i<selectCake.length; i++){
                selectCake[i].style.display ="block"
                 };
         
});

navCup.addEventListener("click", function(){

    for(var i =0; i<selectDough.length; i++){
        selectDough[i].style.display ="none"
         };
         for(var i =0; i<selectSweet.length; i++){
            selectSweet[i].style.display ="none"
             };
             for(var i =0; i<selectCake.length; i++){
                selectCake[i].style.display ="none"
                 };
                 for(var i =0; i<selectCup.length; i++){
                    selectCup[i].style.display ="block"
                     };
             
});

navDough.addEventListener("click", function(){

    for(var i =0; i<selectCup.length; i++){
        selectCup[i].style.display ="none"
         };
         for(var i =0; i<selectSweet.length; i++){
            selectSweet[i].style.display ="none"
             };
             for(var i =0; i<selectCake.length; i++){
                selectCake[i].style.display ="none"
                 };
                 for(var i =0; i<selectDough.length; i++){
                    selectDough[i].style.display ="block"
                     };
             
});

navSweet.addEventListener("click", function(){

    for(var i =0; i<selectCup.length; i++){
        selectCup[i].style.display ="none"
         };
         for(var i =0; i<selectDough.length; i++){
            selectDough[i].style.display ="none"
             };
             for(var i =0; i<selectCake.length; i++){
                selectCake[i].style.display ="none"
                 };
                 for(var i =0; i<selectSweet.length; i++){
                    selectSweet[i].style.display ="block"
                     };
});