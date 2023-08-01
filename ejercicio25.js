/*
Enunciado Ejercicio  25
Dado un string,ponerlo completo en mayusculas o minusculas dependinedo
de si hay mas mayusculas o minusculas por defecto en el string

si hay mas mayusculas ponerlo todo en mayus.
si hay mas minusculas ponerlo todo en minus.


*/

function mayusMinus(texto) {
  let mayusculas = 0;
  let minusculas = 0;

  for (let letra of texto) {
    if (/[A-Z]/.test(letra)) {
      mayusculas++;
    } else {
      minusculas++;
    }
  }
  let resultado ="";
  if(mayusculas >minusculas){
    resultado = texto.toUpperCase();
  }else{    
    resultado = texto.toLowerCase();
  }
  return resultado;
}

console.log(mayusMinus("carllos ANDRES balaguera"));
