//function definition
function printAll(first, second, third)
{
  document.write(first + ", ");
  document.write(second + ", ");
  document.write(third + "<br>");
}

//function invocation
printAll();
printAll("hello");
printAll("hello", "world", "!");
printAll("The", "cow", "jumped", "over!");
document.write("<br>");

//values are passed to functions by-value, meaning a copy
//of the value is sent to the function
var favNumber = "100";
add(favNumber);
document.write("Fav: " + favNumber + "<br>");

function add(number)
{
  number++;
}

//global variable
var movie = "Hostels";

function foo()
{
  //local variable
  var movie = "Incredibles 2";
  document.write("My favorite movie: " + movie + "<br>");
}

foo();

//this function returns the message repeated the specified
//number of times as a single string 
function repeatString(message, times)
{
  var result = "";
  
  for (var i = 1; i <= times; i++)
  {
    result = result + message;
  }
  
  return result;
}

var lineOne = repeatString("a", 10);
document.write(lineOne + "<br>");

var lineTwo = repeatString("b", 20);
document.write(lineTwo + "<br>");

//all paths should return a value 
function isEven(number)
{
  if (typeof number != "number")
  {
     document.write("An invalid number was given to isEven(): " + 
                    number);
  }
  else
  {
    if (number % 2 == 0)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}

var even = isEven(100);
document.write("Is 100 even? " + even + "<br>");

var odd = isEven(101);
document.write("Is 101 even? " + odd + "<br>");

function add(first, second)
{
  return first + second;
}

function add(value)
{
  return value + 1;
}

document.write("add(a, b): " + add(10, 20) + "<br>");
document.write("add(a): " + add(10) + "<br>");

//call a function in my module
var result = subtract(10, 20);
document.write("10 - 20 = " + result + "<br>");

//storing functions in variables
var less = function(first, second) 
{
    if (first < second)
    {
      return first;
    }
    else 
    {
      return second;
    }
};

document.write(less(10, 3) + "<br>");
document.write(less(7, 17) + "<br>");
document.write(less(10, 10) + "<br>");

var lessThan = less;
document.write(lessThan(10, 3) + "<br>");

var more = function(first, second)
{
  if (first > second)
  {
    return first;
  }
  else 
  {
    return second;
  }
}

function compare(a, b, c, compareFunction)
{
  if (compareFunction(a, b) == a && compareFunction(a, c) == a)
  {
    return a;
  }
  else if (compareFunction(b, a) == b && compareFunction(b, c) == b)
  {
    return b;
  }
  else
  {
    return c;
  }
}

document.write(compare(2, 3, 4, more) + "<br>");









