console.log("Hola mundo con JS");
 
{
    /*let  nombre = "Ana";
    const edad = 22.5;
    
    let verdadero = true;

  
    nombre = 43;
    console.log(nombre);

    let vacio = null;
    let indefinido;
    console.log(vacio);
    console.log(indefinido);*/

    console.log( 5 === "5");
    console.log( 5 == "5");

    console.log( true == 1);
    console.log( true === 1);

    let edad  = "18";

    if (edad === 18){
        console.log("iguales en valor y tipo ")
    }

     if (edad == 18){
        console.log("iguales en valor  ")
    }
  
}

const boton = document.getElementById("miBoton");


boton.addEventListener("click", function() {
    console.log("Botón pulsado");
    const nombre = document.getElementById("nombre").value;
    alert("Hola " + nombre);
} );


const botonColor =document.getElementById("btnCambioColor");

botonColor.addEventListener("click", function(){

    const elementos = document.querySelectorAll(".texto");

    
    elementos.forEach(function(el){
  
        if(el.style.color === "red"){
            el.style.color = "black";
        } else {
            el.style.color = "red";
        }

    });

});