/*
Enunciado Ejercicio 2
Dado una cadena de texto,comprobar si es un palindromo o no.
Los palíndromos son palabras que se leen igual aun estando invertidos
por ejemplo: ana,bob,otto,allivessevilla

No tener en cuenta espacios o simbolos raros. 
*/

function palindromo(texto){
    let invertido = texto
                    .split('')
                    .reverse()
                    .join('');
    
    return (invertido === texto);
    
}

console.log("¿Es un palindromo? "+palindromo("hola"));