/* // 1. Obtener el nodo raíz <html>
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
parrafos[0].style.color = "red"; */



/* // childNodes: todos los nodos hijos
console.log(document.getElementById("contenedor").childNodes);

// children: solo elementos HTML hijos
console.log(document.getElementById("contenedor").children);

// parentNode: padre de parrafo1
console.log(document.getElementById("parrafo1").parentNode);

// nextSibling: siguiente nodo (puede ser texto o comentario)
console.log(document.getElementById("parrafo1").nextSibling);

// nextElementSibling: siguiente elemento HTML
console.log(document.getElementById("parrafo1").nextElementSibling); */



var elementosP = document.getElementsByTagName("p");

// Muestro todos los elementosP que haya
for(i = 0; i < elementosP.length - 1; i++){
    console.log(elementosP[i]);
}

// Mientras haya elementos de clase parrafos los elimino
while (document.getElementsByClassName("parrafos").length > 0) {
    document.getElementsByClassName("parrafos")[0].remove();
}

// Muestro todos los elementosP que haya
for(i = 0; i < elementosP.length - 1; i++){
    console.log(elementosP[i]);
}