var botonSesion = document.querySelector(".iniciar-sesion"); //Selector de boton inicio sesion
var botonAgregar = document.querySelector(".agregar-definicion"); //Selector de boton agregar definicion
var meGustaGato = document.querySelector("#like-gato"); //Selector de boton me gusta gato
var meGustaPerro = document.querySelector("#like-perro"); //Selector de boton me gusta perro

botonSesion.addEventListener("click", function() { //Funcion para cambiar el texto del boton inicio sesion a "Cerrar Sesion"
    this.innerText = "Cerrar Sesión";
});

botonAgregar.addEventListener("click", function() { //Funcion para eliminar el boton de agregar definicion al ser clickeado
    this.remove();
});

var likesGato = 22; //Se declara la variante de me gusta de gatos que es igual a la establecida en el html (De manera algo floja la verdad)

meGustaGato.addEventListener("click", function() { //Funcion para aumentar el numero de me gusta en los gatos y avisar al usuario de la accion realizada
    likesGato++;
    this.innerText = likesGato + " Me Gusta";
    window.alert("Le diste Me Gusta a Gato Atigrado");
});

var likesPerro = 45;

meGustaPerro.addEventListener("click", function() {
    likesPerro++;
    this.innerText = likesPerro + " Me Gusta";
    window.alert("Le diste Me Gusta a Golden Retriever");
})