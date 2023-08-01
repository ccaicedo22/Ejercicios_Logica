/*
Enunciado Ejercicio 19
Dado un array de objetos de peliculas (titulo,director,vista)
mostrar todas las peliculas inficando cual has viso y cual no.

*/

function misPeliculas(peliculas){
    for(pelicula of peliculas){
        let para_mostrar = `"${pelicula.titulo} de ${pelicula.director}"`;

        if(pelicula.vista){
            console.log("Ya has visto:",para_mostrar);
        }else{
            console.log("Te falta por ver:",para_mostrar);
        }
    }
    return peliculas;
}


const coleccion_de_peliculas =[
    {
        titulo: "El señor de los anillos",
        director: "Peter Jackson",
        vista: false
    },
    {
        titulo: "El señor de los anillos 2",
        director: "Peter Jackson",
        vista: false
    },
    {
        titulo: "El señor de los anillos 3",
        director: "Peter Jackson",
        vista: true
    }
];

console.log(misPeliculas());

