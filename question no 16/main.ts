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

//print a message to inform that you found a bigger table for dinner.
console.log("Good new's i found a bigger table for dinner");

//Add one new guest on the biggiung of array.
gustList.unshift("ahmed");

//Add one new guest at the end of array.
gustList.push("zain");

//Making a new variable to stor a guest at middle of array.
let middleIndex: number= Math.floor(gustList.length / 2 );

//Add a new guest at the middle of array.
gustList.splice(middleIndex,0,"umair");

//List updated.
console.log("updat list of our guest");

//Print a messag to invite of new guest at dinner.
gustList.forEach(oneGuest=>console.log(`Hellow,${oneGuest},wuold you like a dinner with me`));


