function make_sandwich(...item:string[]) {
console.log("\nMake a sendwich with the following item\n");

item.forEach(one_item => console.log(one_item))

console.log("\n now enjoy sendwich");

}

//Call the function 3 time with 3 different number of argument.
make_sandwich("chicken","cheese","egg","mayo")

make_sandwich("butter","chicken")

make_sandwich("tomato","chicken","mayo garlic souse")
