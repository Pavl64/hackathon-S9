function minMax() {
    let entrada = prompt("Introduce los números separados por coma:");
    let numeros = entrada.split(",").map(valor => Number(valor.trim()));
    let minimo = Math.min(...numeros);
    let maximo = Math.max(...numeros);
    return [minimo, maximo];
  }
  
  console.log(minMax());
  