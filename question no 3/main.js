var personName = "Murtaza Ali";
// name in lowercase
console.log(personName.toLowerCase());
// Name in uppercase
console.log(personName.toUpperCase());
// Name in titlecase
console.log(personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
