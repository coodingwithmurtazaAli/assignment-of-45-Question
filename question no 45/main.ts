//Creat a function to creat a car object with usig rest option
function creating(manufacturer, model, ...options){

  //make an object and value take equal to perameter.
    let car={
    manufacturer: manufacturer,
    model: model,
    };
    
//using for.each function and split our option value in the form of key and value
    options.forEach(option => {
    let [key, value] = option.split(":");
    car[key.trim()] = value.trim();

    });

    return car;
    }
//make a variable and save a value in arguement
let my_car= creating("toyota","4x4","colour:black","year:2022","price:900000")

//run a program to check that it's run properly
console.log(my_car);

