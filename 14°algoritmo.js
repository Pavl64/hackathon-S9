//usando la terminal
function diferenciaMaxMin(arr) {
    let max = arr[0];
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return max - min;
  }
console.log(diferenciaMaxMin([8,1,2,3]))  