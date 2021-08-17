let animacion = document.querySelectorAll(".animacion");
let animacion2 = document.querySelectorAll(".animacion2");
let animacion3= document.querySelectorAll(".animacion3");

function mostrarScroll(){
let scrollTop = document.documentElement.scrollTop;

for (var i=0; i< animacion.length; i++){

    let altura = animacion[i].offsetTop;

    
    if (altura - 950 < scrollTop){

        animacion[i].style.opacity=1;
        animacion[i].classList.add("mostrarArriba");
    }

   

}

for (var i=0; i< animacion2.length; i++){
    let altura2 = animacion2[i].offsetTop;
 if(altura2 - 900 < scrollTop){


        animacion2[i].style.opacity=1;
        animacion2[i].classList.add("mostrarArriba2");


    }}
    
for (var i=0; i< animacion3.length; i++){
    let altura3 = animacion3[i].offsetTop;  
    if(altura3 - 980 < scrollTop){

        
        animacion3[i].style.opacity=1;
        animacion3[i].classList.add("mostrarArriba3");


    }}


}


window.addEventListener('scroll', mostrarScroll);


