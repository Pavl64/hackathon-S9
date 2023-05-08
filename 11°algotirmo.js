//usando la terminal sin prompt

function sumaDeCuadrados(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i * i;
    }
    return sum;
  }
console.log(sumaDeCuadrados(3))