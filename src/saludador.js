function saludar(nombre, genero, edad) {
  const fecha = new Date();
  const hora = fecha.getHours();
  let saludo;

  if (hora >= 6 && hora < 12) {
      saludo = "Buenos días";
  } else if (hora >= 12 && hora < 18) {
      saludo = "Buenas tardes";
  } else {
      saludo = "Buenas noches";
  }

  if (edad > 30) {
      if (genero === "femenino") {
          return saludo + ", Sra " + nombre + "!";
      } else {
          return saludo + ", Sr " + nombre + "!";
      }
  } else {
      return saludo + ", " + nombre + "!";
  }
}

export default saludar;
