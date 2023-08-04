/*
Enunciado Ejercicio  47
Dado un array de objetos , devolver cuales son las aficiones mas comunes de los usuarios
*/

function aficiones(arrObj){
    let mapeo = {};

    for(obj of arrObj){
        for(afi of obj.aficiones){
            if(!mapeo[afi]){
                mapeo[afi] = 1;
            }else{
                mapeo[afi]++;
            }
           
        }
    }
    return mapeo;
}

const usuarios=[
    {nombre: "carlos",aficiones:["informatica,calculo"]},
    {nombre: "camilo",aficiones:["informatica,calculo,videojuegos"]},
    {nombre: "pepe",aficiones:["informatica,cine,futbol"]}
]

console.log(aficiones(usuarios));