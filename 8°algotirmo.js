function charIndex() {
    let palabra = prompt("Introduce una palabra:");
    let caracter = prompt("Introduce el carácter que quieres buscar:");
    let primerIndice = palabra.indexOf(caracter);
    let ultimoIndice = palabra.lastIndexOf(caracter);
    return [primerIndice, ultimoIndice];
  }
  
  console.log(charIndex()); 
  