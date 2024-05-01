function make_sandwich() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("\nMake a sendwich with the following item\n");
    item.forEach(function (one_item) { return console.log(one_item); });
    console.log("\n now enjoy sendwich");
}
//Call the function 3 time with 3 different number of argument.
make_sandwich("chicken", "cheese", "egg", "mayo");
make_sandwich("butter", "chicken");
make_sandwich("tomato", "chicken", "mayo garlic souse");
