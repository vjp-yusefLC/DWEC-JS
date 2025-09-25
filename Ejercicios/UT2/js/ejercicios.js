/* EJERCICIOS FINALES A ENTREGAR - Yusef Laroussi de la Calle
2 DAW - Desarrollo Web en entorno cliente */

// Ejercicio 1

cadena1 = "Hola me llamo Yusef";
cadena2 = "Hola";

const Ejercicio1 = () => {

    function devolverMasCorta(cadena1, cadena2) {
        if (!typeof cadena1 || !typeof cadena2) {
            console.log("Error.");
            return;
        } else {
            if (cadena1.length < cadena2.length) {
                return cadena1;
            } else {
                return cadena2;
            }
        }
    }
    console.log(devolverMasCorta);
}

// Ejercicio 2
