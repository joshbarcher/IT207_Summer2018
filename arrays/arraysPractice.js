//#1: creating arrays
//**********************************************

//preferred way
var numbers = [1, 2, 3];
var address = [1000, "Apple Ln.", "Seattle", 
               "WA", 98999, true];

//another way
var phoneNumber = new Array("1", "222", "445", "1009");

//#2: access elements by index
//**********************************************

//positions (indices) start at zero
var number = address[0];
var streetName = address[1];

console.log("You live at " + number + " " + streetName);

//change element by position
address[0] = 2245;

//use element in expression
address[0]++; //short for address[0] = address[0] + 1;

var fullAddress = address[0] + " " + address[1] + " " + 
                  address[2] + ", " + address[3] + " " + 
                  address[4];
console.log(fullAddress);

//#3: loop over an array
//**********************************************

var nameParts = ["Tom", "S.", "Cruise"];

for (var i = 0; i < nameParts.length; i++)
{
  //print out each value to the console
  console.log(nameParts[i]);
}

nameParts.forEach(function(element) {
  console.log(element.toUpperCase());
});

var location = [1, 2, 3];
console.log(location);







