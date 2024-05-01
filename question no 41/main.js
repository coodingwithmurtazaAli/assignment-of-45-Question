//Define a function to print magician name one by one from an array.
function show_magician(magician) {
    magician.forEach(function (magician_name) { return console.log(magician_name); });
}
//make an Array.
var one_magician = ["usman", "haza", "zain"];
//Calling a function to print magician name one by one.
show_magician(one_magician);
