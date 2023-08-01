/*
Enunciado Ejercicio 6
Dibujar un cuadrado hueco con asteriscos.

Ejemplos:
cuadrado(4)

//devuelve

****
*  *
*  *
****

*/

function lado(numero) {
  let lado = "";

  for (let i = 0; i < numero; i++) {
    lado += "*";
  }
  return lado;
}

function cuadrado(numero) {
    //lado de arriba
  let dibujo = lado(numero) + "\n";

  let contenido = "";

  for (let i = 0; i < (numero - 2); i++) { // filas
    contenido = "*";

    //contenido hueco
    for(let x=0; x< (numero - 2); x++){
        contenido += " ";
    }
    contenido += "*";

    //añadir fila al dibujo
    dibujo += contenido + "\n";
  }
  //lado de abajo
  dibujo += lado(numero);

  return dibujo;
}

console.log(cuadrado(4));
