//Creat a function
function make_shirt(size, Print_mesage) {
    if (size === void 0) { size = "large"; }
    if (Print_mesage === void 0) { Print_mesage = "I love TypeScript"; }
    console.log("make a ".concat(size, " size shirt with pritnt ").concat(Print_mesage, " on shirt"));
}
//Calling our function with by defult value.
make_shirt();
//Calling a function with change value but by defult print_message
make_shirt("medium");
