
let correcto = 0;
let incorrecto = 0;

document.getElementById("encuesta").addEventListener("submit", function(event) {

    event.preventDefault();

    correcto = 0;
    incorrecto = 0;

    let nombre = document.getElementById("nombre").value;
    let familiar = document.getElementById("familiar").value;

    if (nombre === "" || familiar === "") {
        alert("Debes completar tus datos");
        return;
    }

    let respuestas = [1, 3, 2, 1, 1];

    for (let i = 1; i <= 5; i++) {

        let respuesta = document.querySelector('input[name="p' + i + '"]:checked');

        if (respuesta === null) {
            alert("Debes responder todas las preguntas");
            return;
        }

        if (Number(respuesta.value) === respuestas[i - 1]) {
            correcto++;
        } else {
            incorrecto++;
        }
    }

    let mensaje = "";

    if (correcto >= 4) {
        mensaje = "🏆 ¡ERES UN CAMPEÓN! ME CONOCES MUY BIEN";
    } else {
        mensaje = "🔥 ¡BUEN INTENTO! DEBES ENTRENAR MÁS";
    }

    let resultado = document.getElementById("resultado");

    resultado.style.display = "block";

    resultado.innerHTML =
        "<h2>🏆 RESULTADOS FINALES 🏆</h2>" +
        "<p>Jugador: " + nombre + "</p>" +
        "<p>Parentesco: " + familiar + "</p>" +
        "<hr>" +
        "<p>✅ Respuestas correctas: " + correcto + "</p>" +
        "<p>❌ Respuestas incorrectas: " + incorrecto + "</p>" +
        "<h3>" + mensaje + "</h3>";

    resultado.scrollIntoView({ behavior: "smooth" });

});
