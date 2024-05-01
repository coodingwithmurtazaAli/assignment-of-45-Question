//Creat an arry.
let number:number[]=[1, 2, 3, 4, 5, 6, 7, 8, 9]

//Using loop on our condition.
number.forEach(one_number =>{

    //Make a variable of string
let ordinel_ending : String

    if(one_number === 1){
 ordinel_ending ="st"
    }else if(one_number === 2){
        ordinel_ending ="nd"
    }else if(one_number=== 3){
        ordinel_ending ="rd"
    }else{
        ordinel_ending ="th"
    }
    console.log(`${one_number}${ordinel_ending}`);
    
})





