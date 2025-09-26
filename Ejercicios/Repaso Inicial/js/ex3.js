let nombre;

nombre = prompt("Introduzca su nombre de usuario: ");


let segundos = 3 * 1000;

setTimeout(() => {
    alert("Hola, " + nombre);
}, segundos);