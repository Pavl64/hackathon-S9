function formatPhoneNumber() {
    let entrada = prompt("Introduce los 10 dígitos del número de teléfono sin espacios:");
    let numeros = entrada.split("").map(valor => Number(valor));
    let codigoArea = numeros.slice(0, 3).join("");
    let primerosDigitos = numeros.slice(3, 6).join("");
    let ultimosDigitos = numeros.slice(6).join("");
    return `(${codigoArea}) ${primerosDigitos}-${ultimosDigitos}`;
  }
  
  console.log(formatPhoneNumber()); 
  