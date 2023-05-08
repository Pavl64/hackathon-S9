//sin usar prompt usando la terminal
let arr=[{ name: "Steve" },
{ name: "Mike" },
{ name: "John" }]
function getStudentNames(arr) {
    const names = [];
    for(let i=0; i<arr.length; i++) {
      names.push(arr[i].name);
    }
    return names;
  }
console.log(getStudentNames(arr))