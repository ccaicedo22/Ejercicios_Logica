/*
Enunciado Ejercicio  49
Dado un objeto, comprobar si existe una propiedad en concreto
*/


function existePropiedad(objeto, propiedad){
    return typeof objeto === 'object' && typeof propiedad === "string";
}

let usuario = {
    nombre: "carlos",
    apellido: "caicedo"
}
console.log(existePropiedad(usuario,"nombre"))