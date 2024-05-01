//Creat a function to creat a car object with usig rest option
function creating_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //make an object and value take equal to perameter.
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    //using for.each function and split our option value in the form of key and value
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//make a variable and save a value in arguement
var my_new_car = creating_car("toyota", "4x4", "colour:black", "year:2022", "price:900000");
//run a program to check that it's run properly
console.log(my_new_car);
