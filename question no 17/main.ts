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

//Inform that only two guest can be invited to dinner.
console.log("unfortunately,the new dinner table won arrive to time,I can invited only two guest on dinne");

//Rimove a guest from our array and prin a messag with using a pop.
while(gustList.length > 2){

    let RemoveGust=gustList.pop();
    console.log(`sorry,${RemoveGust},I can't invite you to dinner`)
};

//Sending a invitation tolast lucky guest.
console.log("invitation to last lucky guest");

gustList.forEach(luckyGuest=>console.log(`lucky,${luckyGuest},you are still invited to dinner`)
);

//Remove last two guest
gustList.pop;
gustList.pop;

console.log("empty guestList");


  