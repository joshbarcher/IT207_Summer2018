//principle #1: math constants
//***************************************************

var radius = 2.5;
var areaOfCircle = Math.PI * radius * radius;
var circumfrence = 2 * Math.PI * radius;

//principle #2: basic math functions
//***************************************************

//exponents
var number = Math.pow(2, 10); //1024
number = Math.pow(10, -3); //0.001

//logs
number = Math.log(10); //base e
number = Math.log2(64); //base 2, number = 6
number = Math.log10(100); //base 10, number = 2

//rounding
number = Math.round(3.21); //3
number = Math.round(3.667); //4
number = Math.ceil(3.21); //4
number = Math.floor(3.667); //3

//max, min - variable length parameters
number = Math.min(10, -2, 4, -7, 3, 0, -12); //12
number = Math.max(1, 3); //3

//trig functions - optional
number = Math.sin(Math.PI);
number = Math.cos(Math.PI);

//randomness
number = Math.random(); //number between [0, 1)

//principle #3: applications
//***************************************************

lotsOfRandomNumbers(1, 10, 100);

function lotsOfRandomNumbers(low, high, howMany)
{
  var paragraph = document.getElementById("content");
  for (var i = 1; i <= howMany; i++)
  {
    var number = randomNumber(low, high);
    paragraph.innerHTML += number + "<br>";
  }
}

function randomNumber(low, high)
{
  var range = high - low + 1;
  var number = Math.random() * range; //0 - (range - 1)
  
  //round down
  number = Math.floor(number);
  
  return number + low;
}

//law of large numbers
averageOfNumbers(1, 1000, 10);
averageOfNumbers(1, 1000, 100);
averageOfNumbers(1, 1000, 1000);
averageOfNumbers(1, 1000, 10000);
averageOfNumbers(1, 1000, 100000);
averageOfNumbers(1, 1000, 1000000);

function averageOfNumbers(low, high, howMany)
{
  var paragraph = document.getElementById("content");
  
  var total = 0;
  for (var i = 1; i <= howMany; i++)
  {
    var number = randomNumber(low, high);
    total += number;
  }
  
  var average = total / howMany;
  
  paragraph.innerHTML += "Average of " + howMany + " numbers between [" + 
                         low + ", " + high + "] is " + average + "<br>";
}