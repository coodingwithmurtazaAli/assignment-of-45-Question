//creat an array of userName
var userName = ["umer", "asad", "murtaza", "admin"];
//using fooreach loop array
userName.forEach(function (oneUser) {
    if (oneUser === "admin") {
        console.log("Hellow,".concat(oneUser, ",would you like to see status report?"));
    }
    else {
        console.log("Hellow,".concat(oneUser, ",thanks for logging in again"));
    }
});
