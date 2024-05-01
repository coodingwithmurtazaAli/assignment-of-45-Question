//Define a function to print magician name one by one from an array.
function show_magician(magician) {
    magician.forEach(function (magician_name) { return console.log(magician_name); });
}
//Define anothor function to modify magician name.
function make_great(magician) {
    return magician.map(function (Name) { return console.log("The great ".concat(Name)); });
}
//make an Array.
var one_magician = ["usman", "haza", "zain"];
var great = make_great(one_magician);
console.log(great);
