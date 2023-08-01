/*
Enunciado Ejercicio 12
Dado un numero mostrar todos los numeros desde ese al 0 de 8 en 8
en una lista con guiones donde cada numero debe empezar
por n

*/

function hastaCero(numero){
 let resultado = `--- Del ${numero} al 0 ---- \n`;

 while(numero>0){
    resultado += `-n ${numero} \n`
    numero -=8;
 }
 resultado += "----FIN----";

 return resultado;
}

console.log(hastaCero(50));