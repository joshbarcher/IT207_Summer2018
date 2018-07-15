//principle #1: for loops
//****************************************************

//basic format
var n = 100;
for (var i = 1; i <= n; i++)
{
  //do something
}

//flip a coin n times
flipCoins(5);

function flipCoins(times)
{
  for (var i = 1; i <= times; i++)
  {
    var result = flipCoin();
    if (result)
    {
      document.write("Heads!<br>");
    }
    else
    {
      document.write("Tails!<br>");
    }
  }
}

//returns true for heads or false for tails
function flipCoin()
{
  var coin = Math.floor(Math.random() * 2); //0 or 1
  return coin == 1;
}

//principle #2: while loops
//****************************************************

var condition = true;
while (condition)
{
  //do something...
  
  condition = false; //stop the loop
}

//while
var sum = 0;
var output = "0";
while (sum <= 100)
{
  //get a random value
  var randomValue = Math.random() * 10; //0-9.999...
  
  //update sum and output
  sum += randomValue;
  output += " + " + randomValue.toFixed(2);
}
document.write(output + " = " + sum.toFixed(2) + "<br>");

//principle #3: do-while loops
//****************************************************

var number;
var finished = false;
do 
{
  number = prompt("Enter your favorite number");
  finished = confirm("Are you sure?");
} while (!finished);
document.write("Your favorite number is: " + number + "<br>");

//principle #4: break, continue
//****************************************************

//print numbers from 1-20 except when divisible by 7 or 10
var output = "0";
for (var i = 1; i <= 20; i++)
{
  if (i % 7 == 0 || i % 10 == 0)
  {
    continue;
  }
  output += ", " + i;
}
document.write(output + "<br>");

//flip coins until 4 heads up come up
var heads = 0;
var output = "";
while (true)
{
  var coin = flipCoin();
  if (coin == true)
  {
    heads++;
    output += " heads";
  }
  else
  {
    heads = 0;
    output += " tails<br>";
  }
  
  if (heads == 4)
  {
    break;
  }
}
document.write(output + "<br>");