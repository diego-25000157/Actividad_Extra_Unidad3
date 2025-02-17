function jugar() {
    let nombre = prompt("Ingrese su nombre:");
    let nuevojuego = true;

    while (nuevojuego) {
        let num_computadora = Math.floor(Math.random() * 9) + 1;
        let num_usuario;

        do {
            num_usuario = parseInt(prompt("Ingrese su número entre 3 y 6:"));
        } while (isNaN(num_usuario) || num_usuario < 3 || num_usuario > 6);

        let eleccion = prompt("¿Cree que su número es mayor, menor o igual al de la computadora?").toLowerCase();

        let Resultado = `La computadora eligió ${num_computadora}, usted eligió ${num_usuario}. `;
        let acierto = false;

        if (num_usuario > num_computadora && eleccion === "mayor") {
            Resultado += "Su elección es mayor ¡Ha adivinado!";
            acierto = true;
        } else if (num_usuario < num_computadora && eleccion === "menor") {
            Resultado += "Su elección es menor ¡Ha adivinado!";
            acierto = true;
        } else if (num_usuario === num_computadora && eleccion === "igual") {
            Resultado += "Su elección es igual ¡Ha adivinado!";
            acierto = true;
        } else {
            Resultado += "Incorrecta Eleccion.";
        }

        console.log(Resultado);

        let respuesta = prompt("¿Desea jugar otra vez? (SI/NO)").toLowerCase();
        if (respuesta !== "si") {
            nuevojuego = false;
            console.log(`Gracias por jugar, ${nombre}.`);
        }
    }
}


jugar();