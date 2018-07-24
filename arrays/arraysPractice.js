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

//#4: use arrays to pass any number of arguments to a function
//**********************************************

function printMe()
{
  for (var i = 0; i < arguments.length; i++)
  {
    console.log(arguments[i]);
    console.log(typeof arguments[i]);
  }
  console.log("printMe() finished");
}

//a dummy object
var nameObject = {
  fname: "Josh",
  lname: "Archer"
};

//invoke the function with different parameters
printMe();
printMe("Josh", "was" ,"here");
printMe(100, true, nameObject);

var favorite = "true"; 
if (favorite !== true) 
{ 
  alert("not equal"); 
} 
else 
{ 
  alert ("equal"); 
}

//#5: push() and pop()
//**********************************************

//add a few extra elements to our address
address.push("beige");
address.push("sq. ft. 1600");

console.log(address);

console.log(address.pop());
console.log(address);

//remove all elements in the array
//address = [];

while (address.length > 0) 
{
  address.pop();
}

console.log(address);

//#6: splice() and slice()
//**********************************************

var letters = ["a", "b", "c"];

//1 = index to add at, 0 = the number of elements to replace
letters.splice(1, 0, "d", "e", "f"); 
console.log(letters);

var lessLetters = letters.slice(2, 4);
console.log(lessLetters);

//#7: map() and reduce()
//**********************************************

var nums = [1, 3, 4, 10, 15, 16, 20];
nums = nums.map(function(element) {
  return element ** 2;
});

console.log(nums);

var sum = nums.reduce(function (total, element) {
  return total + element;
}, 0);

console.log(sum);

//#8: some() and every()
//**********************************************

var check = [1, 2, 1];

//true if every element returns true with the given function
var every = check.every(function(value, index, array) {
  return value > 0;
});

console.log("Every: " + every);

var some = check.some(function(value, index, array) {
  return value === 3;
});

console.log("Some: " + some);

var foo = 10;
var functions = [addOne, addTwo, addThree];
for (var i = 0; i < functions.length; i++)
{
  foo = functions[i](foo);
}

console.log(foo);

function addOne(value)
{
  return value + 1;
}

function addTwo(value)
{
  return value + 2;
}

function addThree(value)
{
  return value + 3;
}