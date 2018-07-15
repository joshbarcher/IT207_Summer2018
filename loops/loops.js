//#1: using for (counting) loops
var n = 10;
for (var i = 1; i <= n; i++)
{
  //do something...
}

//what sequence will the following loop create?
for (var i = 3; i <= 8; i += 2)
{
  document.write(i + " ");
}
document.write("<br>");

var result = factorial(3);
document.write(result + "<br>");

result = factorial(4);
document.write(result + "<br>");

result = factorial(100);
document.write(result + "<br>");

result = factorial(1);
document.write(result + "<br>");

result = factorial(0);
document.write(result + "<br>");

//a function to calculate n!
function factorial(num)
{
  var product = 1;
  
  for (var i = 1; i <= num; i++)
  {
    product *= i;
  }
  
  return product;
}

document.write("1: " + prime(1) + "<br>");
document.write("2: " + prime(2) + "<br>");
document.write("3: " + prime(3) + "<br>");
document.write("5: " + prime(5) + "<br>");
document.write("6: " + prime(6) + "<br>");
document.write("11: " + prime(11) + "<br>");
document.write("1091: " + prime(1091) + "<br>");
document.write("11111: " + prime(11111) + "<br>");

function prime(num)
{
  //check for obvious non-prime values
  if (num <= 1)
  {
    return false;
  }
  
  //loop over lower numbers 
  for (var i = 2; i < num; i++)
  {
    //see if num is evenly divisible by i
    if (num % i === 0)
    {
      return false; //not prime!
    }
  }
  
  return true; //this is prime!
}

//how would you produce this sequence using a for loop?
//-11, -14, -17, -20, -23, -26
for (var i = -11; i >= -26; i -= 3)
{
  document.write(i + " ");
}
document.write("<br>");

//this is an infinite loop!
/*for (;;)
{
  document.write("hello<br>");
}*/

//#2: using while loops

var condition = true;
while (condition)
{
  //do something...
  
  condition = false; //stop the loop
}

//ask the user for numbers until the sum >= 100
var sum = 0;
while (sum < 100)
{
  var userChoice = parseInt(prompt("Number?"));
  sum += userChoice;
}
document.write("The sum was " + sum + "<br>");

//#3: using do-while loops

var favNumber;
var likedNumber = false;
do 
{
  favNumber = parseInt(prompt("Fav number?"));
  likedNumber = confirm("Are you sure?");
} while (!likedNumber);
document.write("Your favorite number is " + favNumber + "<br>");

//#4: using break and continue

//print the numbers between 1 and 20 unless divisible by
//3 or by 7
for (var i = 1; i <= 20; i++)
{
  //detect bad values for i
  if (i % 3 == 0 || i % 7 == 0)
  {
    //move back to the top of the loop
    continue;
  }
  document.write(i + "<br>");
}

for (var i = 1; i <= 10; i++)
{
  for (var j = 1; j <= 10; j++)
  {
    if (i == 3 || i == 5)
    {
      continue;
    }
    
    document.write(j + " ");
  }
  document.write("<br>");
}

//flip coins until 4 heads come up in a row
var heads = 0;
while (true)
{
  //get a "heads" or "tails" from flipCoin()
  var coin = flipCoin();
  
  //keep track of what we've seen
  if (coin === "heads")
  {
     heads++;
  }
  else 
  {
    heads = 0;
  }
  
  //print out the flip
  document.write(coin + "<br>");
  
  //are we done?
  if (heads === 4)
  {
    break; //exit the loop
  }
}

function flipCoin()
{
  //random() will produce a value between [0, 1)
  var value = Math.floor(Math.random() * 2);
  
  if (value === 0)
  {
    return "heads";
  }
  else
  {
    return "tails";
  }
}