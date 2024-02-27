function saludar(nombre, genero) {
  if (genero === "femenino") {
      return "¡Hola Sra " + nombre + "!";
  } else {
      return "¡Hola Sr " + nombre + "!";
  }
}

export default saludar;
