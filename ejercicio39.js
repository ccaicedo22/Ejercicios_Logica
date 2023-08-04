/*
Enunciado Ejercicio  39
Dado un texto,comprobar que sea un email valido
*/

function comprobarEmail(email){
    return /^\w+@\w+\.\w+$/gi.test(email);

    
}

console.log(comprobarEmail("carlosbalaguera@gmail.com"))