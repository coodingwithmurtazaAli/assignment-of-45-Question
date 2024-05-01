//Array of current_user.
let current_user :string[]=["Umer","murtaza","asad","ahmed","usman"];

//Array of new_user.
let new_user :string[]=["zain","umair","umer","raffy","murtaza"];

//Loop on new_user to chek user_name avalaiablity. 
new_user.forEach(new_one_user =>{

   // store our condition in variabl
    let our_condition =current_user.some(current_one_user=>current_one_user.toLowerCase() ===new_one_user.toLowerCase())

    //Print a message
    if("our_condotion"){
        console.log(`sorry,${new_one_user}, thin name alradr is taken`);
        }else{
       console.log("this user_name,${new_one_user},is avable");
        }
}) 