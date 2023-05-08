function repeat(elemento, veces) {
    let arrayResultado = [];
    for (let i = 0; i < veces; i++) {
      arrayResultado.push(elemento);
    }
    return arrayResultado;
  }
  console.log(repeat(12,7))