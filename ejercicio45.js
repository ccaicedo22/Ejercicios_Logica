/*
Enunciado Ejercicio  45
Dado un array de alumnos (nombre y nota) mostrar cuantos alumnos estan suspensos y cuantos estan aprobados
*/

function suspensos(alumnos){
    let aprobados = 0 , suspensos = 0;
    for (alumno of alumnos){
        if(alumno[1] >=5){
            aprobados++;
        }else{
            suspensos++;
        }
    }
    return {
        "aprobados": aprobados,
        "suspensos": suspensos
    };
}

console.log(suspensos([
    ["carlos",10],
    ["juan",2],
    ["camilo",7]
]));