let valores = prompt("escriba los valores separados por comas:");
valores = valores.split(",");
function filtrar(...valores) {
    return valores.filter((valor) => isNaN(valor));
  }
  
  console.log(filtrar(...valores));
  