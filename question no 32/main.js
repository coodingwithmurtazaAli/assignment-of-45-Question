//Array of current_user.
var current_user = ["umer", "murtaza", "asad", "ahmed", "usman"];
//Array of new_user.
var new_user = ["zain", "umair", "umer", "raffy", "murtaza"];
//Loop on new_user to chek user_name avalaiablity. and store our condition in variable.
new_user.forEach(function (new_one_user) {
    var our_condition = current_user.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if ("our_condotion") {
        console.log("sorry,".concat(new_one_user, ", thin name alradr is taken"));
    }
    else {
        console.log("this user_name,${new_one_user},is avable");
    }
});
