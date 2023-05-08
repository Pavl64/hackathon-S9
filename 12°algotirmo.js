//usando la terminal
function multiplicar(arr) {
    let length = arr.length;
    let newArr = [];
  
    for (let i = 0; i < length; i++) {
      newArr.push(arr[i] * length);
    }
  
    return newArr;
  }
console.log(multiplicar([5,2,1]))  