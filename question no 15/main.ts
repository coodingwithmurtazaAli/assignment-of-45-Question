//creat a guest list.
let gustList:string[] =["umer","asad","murtaza"];

//Remove one guest who can not come at dinner.
let  oneGuest= gustList[2];

//Print a messag to inform that he can not come at dinner.
console.log(oneGuest," can not come at dinner");

//Add one new guest 
gustList.splice(2,3,"usman");

//Print a messag that person who's still invite on dinner.
gustList.forEach(guest=>console.log(`hellow,${guest},would you like to dinner with me`));  