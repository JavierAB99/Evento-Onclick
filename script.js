var botonSesion = document.querySelector(".iniciar-sesion");
var botonAgregar = document.querySelector(".agregar-definicion");
var meGustaGato = document.querySelector("#like-gato");
var meGustaPerro = document.querySelector("#like-perro");

botonSesion.addEventListener("click", function() {
    this.innerText = "Cerrar Sesión";
});

botonAgregar.addEventListener("click", function() {
    this.remove();
});

var likesGato = 22;

meGustaGato.addEventListener("click", function() {
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