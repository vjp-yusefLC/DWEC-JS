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

    let producto = "Producto generico";
    let precio = 100;
    let impuestos = 21;

    function convertirParametros(producto, precio, impuestos) {
        producto = String(producto);
        parseInt(precio);
        parseInt(impuestos);
        console.log("El producto es " + producto + " el precio es " + precio + " y su impuesto es " + impuesto);
    }

    convertirParametros(producto, precio, impuestos);
}

