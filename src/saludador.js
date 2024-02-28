function saludar(nombre, genero, edad) {
  if (edad > 30) {
      if (genero === "femenino") {
          return "¡Hola Sra " + nombre + "!";
      } else {
          return "¡Hola Sr " + nombre + "!";
      }
  } else {
      return "¡Hola " + nombre + "!";
  }
}

export default saludar;
