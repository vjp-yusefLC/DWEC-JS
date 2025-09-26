/* EJERCICIOS FINALES A ENTREGAR - Yusef Laroussi de la Calle
2 DAW - Desarrollo Web en entorno cliente */

// Ejercicio 1

const Ejercicio1 = () => {

    let cadena1 = "Soy Yusef";
    let cadena2 = "Hola me llamo Yusef";

    function devolverMasCorta(cadena1, cadena2) {

        if (typeof cadena1 !== "string" || typeof cadena2 !== "string") {
            return console.log("Error.");
        } else {
            if (cadena1.length < cadena2.length) {
                return console.log(cadena1);
            } else {
                return console.log(cadena2);
            }
        }
    }
    devolverMasCorta(cadena1, cadena2);
}

// Ejercicio 2

const Ejercicio2 = () => {

    let cadena1 = "Arroz";
    let cadena2 = "Zorra";

    function comprobarCadenaAlReves(cadena1, cadena2) {
        if (typeof cadena1 === "string" && typeof cadena2 === "string") {

            if (cadena1.toLowerCase() === cadena2.toLowerCase().split('').reverse().join('')) {
                console.log("La cadena 1 es igual a la 2 del reves.");
            }
            else {
                console.log("La cadena 1 no es igual a la 2 del reves.");
            }
        }
    }
    comprobarCadenaAlReves(cadena1, cadena2);
}

// Ejercicio 3

const Ejercicio3 = () => {

    let array = [1, 2, 3, "Yusef", 4, "Hola", true];

    function contarElementosArray(array) {
        let contNum = 0;
        let contStr = 0;
        let contOtros = 0;

        for (let elemento of array) { // Recorro el array
            if (typeof elemento === "number") {
                contNum++;
            } else if (typeof elemento === "string") {
                contStr++;
            } else {
                contOtros++;
            }
        }

        console.log("Hay " + contNum + " number.");
        console.log("Hay " + contStr + " string.");
        console.log("Hay " + contOtros + " dato(s) que no son ni number ni string.");
    }

    contarElementosArray(array);
}

// Ejercicio 4

const Ejercicio4 = () => {

    let producto;
    let precio;
    let impuestos;

    function convertirParametros(producto = "Naranja", precio = 100, impuestos = null) {
        producto = String(producto);
        precio = parseInt(precio);
        impuestos = parseInt(impuestos);
        if (isNaN(precio)) {
            precio = 100;
        }
        if (isNaN(impuestos)) {
            impuestos = 21;
        }
        console.log("El producto es " + producto + " el precio es " + precio + " y su impuesto es " + impuestos);
    }

    convertirParametros("Naranja", true, false);
}

// Ejercicio 5

const Ejercicio5 = () => {

    let array = [34, 5, 2, 9, 16, 22, 7];

    function ordenarArray(array) {
        console.log("Array antes de ordenarlo: " + array + "\n");

        //Utilizare el metodo de la burbuja para ordenarlo
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = 0; j < array.length - 1 - i; j++) {
                if (array[j] > array[j + 1]) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
        console.log("Array una vez ordenado: " + array);
    }

    ordenarArray(array);
}

// Ejercicio 6

const Ejercicio6 = () => {
    let array = [2, 3, 4, 5];

    function modificarArray(array) {
        console.log(array.join('#'));

        array.unshift(0, 1);
        console.log(array.join('#'));

        array.push(6, 7);
        console.log(array.join('#'));

        array.splice(3, 3);
        console.log(array.join('#'));

        array.splice(array.length - 1, 1, 3, 4, 7);
        console.log(array.join('#'));
    }

    modificarArray(array);
}

// Ejercicio 7

const Ejercicio7 = () => {
    let array = [2, 4, 6, 8, 10];

    function comprobarTodosValoresSonPares(array) {
        let todosPares = array.every(elemento => {
            if (elemento % 2 == 0) {
                return true;
            }
            else {
                return false;
            }
        })

        if (todosPares) {
            return "Si"
        } else {
            return "No"
        }
    }

    console.log("Todos los valores del array son pares. \n¿Es cierto?: " + comprobarTodosValoresSonPares(array));
}

// EJercicio 8

const Ejercicio8 = () => {

    let array = [1, 2, 3, 4];

    function procesarArray() {
        
    }
}