let numeros = prompt("escribe los números separados por comas:");
numeros = numeros.split(",");
function sumarNumeros(...numeros) {
    let resultado = 0;
    for (let i = 0; i < numeros.length; i++) {
      resultado += parseFloat(numeros[i]);
    }
    return resultado;
}
console.log(sumarNumeros(...numeros));
  