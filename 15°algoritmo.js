function filterList(arr) {
    return arr.filter(elem => Number.isInteger(elem));
  }
console.log(filterList([3,"hola",5,"gol",7]))