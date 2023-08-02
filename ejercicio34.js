/*
Enunciado Ejercicio  34
Dados dos numeros, devolver los resultados de las operaciones basicas entre ellos (sume,resta,division y multiplicacion)
*/

function calculadora(numero1,numero2){
    let resultado = `La suma es: ${numero1+numero2}
                     La resta es: ${numero1-numero2}
                     La multiplicacion es ${numero1*numero2}
                     La division es ${numero1/numero2}`;


    return resultado;




}

console.log(calculadora(5,5));