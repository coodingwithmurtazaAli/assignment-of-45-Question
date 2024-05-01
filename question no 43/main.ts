//Define a function to print magician name one by one from an array.
function show_magician(magician :string[]){
    magician.forEach(magician_name=>console.log(magician_name)
    )}

//Define anothor function to modify magician name.
function make_great(magician:string[]){
return magician.map(Name=>`The great ${Name}`
)}
//make an Array.
   let one_magician =["usman","haza","zain"]
   
   //Making a copy of orignal array through slice().
let copy_magician_name =one_magician.slice()

//Make a variable of make_great function and include copy_magician_name in it's ourgument.
let make_great_name= make_great(copy_magician_name)

//Print copy array
console.log("\ncopy array");
show_magician(one_magician)

//Print modify array
console.log("\n modify array\n");
show_magician(make_great_name)