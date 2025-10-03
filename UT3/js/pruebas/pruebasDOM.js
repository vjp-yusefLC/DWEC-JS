// 1. Obtener el nodo raíz <html>
console.log(document.documentElement);

// 2. Obtener el <head>
console.log(document.head);

// 3. Obtener el <body>
console.log(document.body);

// 4. Obtener el elemento con id "titulo"
const titulo = document.getElementById("titulo");
console.log(titulo);

// 5. Obtener todos los elementos con clase "negrita"
const elementosNegrita = document.getElementsByClassName("negrita");
console.log(elementosNegrita);

// 6. Obtener todos los elementos <p>
const parrafos = document.getElementsByTagName("p");
console.log(parrafos);

// Ejemplo: Cambiar el texto del título
if (titulo) {
    titulo.textContent = "Título modificado por pruebasDOM.js";
}

// Ejemplo: Cambiar el color del primer <p>
parrafos[0].style.color = "red";
