/*
Enunciado Ejercicio  22
Dado dos numeros inficar cual es mayor y cual es menor


*/

function mayorMenor(numero1,numero2){

    let resultado ="";

    if(numero1 === numero2){
        resultado = "los numeros son iguales"
    }else if(numero1 > numero2){
        resultado = "el numero mayor es: "+numero1+"\n";
        resultado += "el numero menor es: "+numero2;
    }else if(numero1 < numero2){
        resultado = "el numero mayor es: "+numero2+"\n";
        resultado += "el numero menor es: "+numero1;
    }else{
        resultado = "introduce numeros correctos";
    }

    return resultado;

}

console.log(mayorMenor(80,9));