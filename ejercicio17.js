/*
Enunciado Ejercicio 17
Dado un numero, mostrar los numeros de 1 hasta el numero
pero para multiplos de tres imprimir "buzz" en lugar del numero
y para los multiplos de cinco imprimir "lightyear"
para multiplos de tres y cinco imprimir "buzzlightyear"

*/

function buzz(numero){
   let  resultado = "";
    
    if(numero % 3 ===0 && numero % 5 === 0){
        resultado = "BuzzLightyear";
    }else if(numero % 3 ===0){
        resultado = "buzz";
        
    }else if(numero % 5 === 0){
        resultado = "lightyear";
    }else{
        return numero;
    }
    return resultado;
}

console.log(buzz(3));