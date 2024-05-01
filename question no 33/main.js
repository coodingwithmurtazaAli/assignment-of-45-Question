//Creat an arry.
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Using loop on our condition.
number.forEach(function (one_number) {
    var ordinel_ending;
    if (one_number === 1) {
        ordinel_ending = "st";
    }
    else if (one_number === 2) {
        ordinel_ending = "nd";
    }
    else if (one_number === 3) {
        ordinel_ending = "rd";
    }
    else {
        ordinel_ending = "th";
    }
    console.log("".concat(one_number).concat(ordinel_ending));
});
