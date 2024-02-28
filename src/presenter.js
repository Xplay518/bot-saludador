import saludar from "./saludador.js";

const saludoForm = document.getElementById("saludo-form");
const nombreInput = document.getElementById("nombre");
const edadInput = document.getElementById("edad");
const generoSelect = document.getElementById("genero");
const idiomaSelect = document.getElementById("idioma");
const saludoDiv = document.getElementById("saludo-div");

saludoForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const nombre = nombreInput.value;
    const edad = parseInt(edadInput.value);
    const genero = generoSelect.value;
    const idioma = idiomaSelect.value;
    saludoDiv.innerText = saludar(nombre, genero, edad, idioma);
});
