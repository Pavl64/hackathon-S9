
  
  function sumaDeCubos() {
    let arr = prompt("Ingrese una lista de números separados por comas: ").split(",");
    let suma=0;
  
    for (let i = 0; i < arr.length; i++) {
      const num = parseInt(arr[i]);
      suma += num ** 3;
    }
  
    return suma;
  }
  console.log(sumaDeCubos())
  