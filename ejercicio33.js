/*
Enunciado Ejercicio  33
Haz un reloj que en tiempo real vaya mostrando la hora o cada segundo

solo puedes usar el objeto date para conseguir la hora por primera vez, pero no para
actualizar la hora.

*/

function relojRapido(){
    setInterval(()=>{
        const  fecha = new Date();
        const horas =fecha.getHours();
        const minutos = fecha.getMinutes();
        const segundos = fecha.getSeconds();


        console.log(`${horas}:${minutos}:${segundos}`)
    },1000);
}
relojRapido();