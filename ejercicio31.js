/*
Enunciado Ejercicio  31
Dado un numero, indicar que tipo de angulo es.

*/


function angulo(numero){
        let resultado ="Angulo completo";
        if(numero < 90){
            resultado = "angulo agudo";
        }else if(numero ===90){
            resultado = "angulo recto";
        }else if(numero >90 && numero <180){
            resultado = "angulo obtuso";
        }else if(numero === 180){
            resultado = "angulo llano";
        }else if(numero >180 && numero <360){
            resultado = "angulo concavo";
        }
            
        return resultado;
}

console.log(angulo(180));