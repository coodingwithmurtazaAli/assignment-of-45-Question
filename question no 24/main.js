//Define variable
var mango = "mango";
var uppperCase = "APPLE";
var ten = 10;
var fruits = ["apple", "banana", "mango"];
//Test for uquality and unequality.
console.log("is mango is equal to mango ?");
console.log(mango == mango);
console.log("\n is manngo is not equal's to mango");
console.log(mango != mango);
//Test using lowerCase function.
console.log("\n is is upperCase is equal's to apple after converting lowerCase ?");
console.log(uppperCase.toLowerCase() == "apple");
console.log("\n is upperCase is not equal's to apple after convrting lowerCase");
console.log(uppperCase.toLowerCase() != "apple");
//Numaricle test .
//Equals to and not equal's to.
console.log("\n is ten is equal's to 10 ?");
console.log(ten == 10);
console.log("\n is ten is not equal's t10");
console.log(ten != 10);
//Greater then and less then.
console.log("\n is ten is greater then 5 ?");
console.log(ten > 5);
console.log("\nis ten is less then 5 ?");
console.log(ten < 5);
//Greater then or equal's to and less then or equal's to.
console.log("\n is ten is greater then or equal's to 5 ?");
console.log(ten >= 5);
console.log("\n is ten is less then or equals to 5 ?");
console.log(ten <= 5);
//Test using with && (and) operator
console.log("\n is ten is greater then five and ten is equal's to 5 ");
console.log(ten > 5 && ten != 5);
console.log("\n is ten less then five and ten is equals to five ?");
console.log(ten < 5 && ten == 5);
//Test using with || (or) operator.
console.log("\n is ten less then twenty || ten is equal's to twenty ?");
console.log(ten < 20 || ten == 20);
console.log("\n is ten is greater then twenty || ten is == twenty ?");
console.log(ten > 20 || ten == 20);
//Test whether an item is including in array.
console.log("\n is banana is include in fruit array ?");
console.log(fruits.includes("banana"));
console.log("\n is banana is not include in fruit array ?");
console.log(!fruits.includes("banana"));
