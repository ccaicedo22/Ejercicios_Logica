/*
Enunciado Ejercicio 7
Dado dos numeros,devolver cuantos numeros IMPARES hay entre ellos.

Ejemplos:
cuadrado(4)

//devuelve
impares(1,100) //Devuelve: 50

*/

function impares(numero1 , numero2){
    let contador = 0;
    
    while(numero1 < numero2){
        
        if(numero1%2 !==0) contador++;

        numero1++;
    }
    return contador;
}
console.log("Numeros Impares:",impares(1,100));