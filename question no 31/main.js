//creat an array of userName
var userName = ["umer", "asad", "murtaza", "admin"];
userName = [];
if (userName.length === 0) {
    console.log("Your array is empty we need to find some user");
}
else {
    //using fooreach loop array
    userName.forEach(function (oneUser) {
        if (oneUser === "admin") {
            console.log("Hellow,".concat(oneUser, ",would you like to see status report?"));
        }
        else {
            console.log("Hellow,".concat(oneUser, ",thanks for logging in again"));
        }
    });
}
//using fooreach loop array
userName.forEach(function (oneUser) {
    if (oneUser === "admin") {
        console.log("Hellow,".concat(oneUser, ",would you like to see status report?"));
    }
    else {
        console.log("Hellow,".concat(oneUser, ",thanks for logging in again"));
    }
});
