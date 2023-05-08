let nombre=prompt("escriba su nombre");
let apellido=prompt("escriba su apellido");
let edad=prompt("escriba su edad");
function saludar(nombre, apellido, edad) {
    return "Hola mi nombre es " + nombre + " " + apellido + " y mi edad es " + edad;
  }
  
  console.log(saludar(nombre,apellido,edad));