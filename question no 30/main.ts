//creat an array of userName
let userName :string[] =["umer","asad","murtaza","admin"];

//using fooreach loop array
userName.forEach(oneUser => {
    if(oneUser === "admin"){
   console.log(`Hellow,${oneUser},would you like to see status report?`);
   }else{
    console.log(`Hellow,${oneUser},thanks for logging in again`);
    }
});




