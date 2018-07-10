//#1: conditional logic
var hungry = confirm("Hungry?");
if (hungry)
{
  document.write("You are hungry");
}

//#2: mutual exclusion
var rainy = confirm("Rainy?");

//course of action?
if (!rainy && hungry)
{
  //do something...
}
else if (rainy || !hungry)
{
  //do something...
}
else if (rainy)
{
  //do something...
}
else
{
  //do something...
}
  
//#3: nested if statements
var red = parseInt(prompt("Red?"));
var green = parseInt(prompt("Green?"));
var blue = parseInt(prompt("Blue?"));

console.log(red);

if (red === 0)
{
  if (green === 0)
  {
    if (blue === 0)
    {
      document.write("The color is white");
    }
  }
}
  
//#4: curly braces are optional (be careful...)
if (confirm("Are you over 5ft tall?"))
  document.write("well look at you!");
  document.write("You are tall (subjectively)");

var favNumber = 100;
if (favNumber === 42)
  //do something...
else if (favNumber < 0)
  //do something...
else
  //do something...
  
if (favNumber > 1000000) document.write("That number is big!");

//#5: switch statements

var favoritePet = "Fish";
switch (favoritePet)
{
  case "Canary":
    document.write("Cleaning up their cage, sigh...");
    break;
  case "Alligator":
    document.write("That's illegal...");
    break;
  case "Fish":
    document.write("Cleaning up their tank, sigh...");
    break;
  case "Dog":
    document.write("Man's best friend...");
    break;
  default:
    document.write("I've never heard of that animal");
    break;
}
  
var marinersFan = true;
switch (marinersFan)
{
  case true:
    document.write("Well, they are doing good this year");
    break;
  case false:
    document.write("I don't blame you");
    break;
}
  
var accountType = "Dev";
switch (accountType)
{
  case "Dev":
    document.write("delete all accounts, dump the DB");
  case "Admin":
    document.write("delete any account, remove data");
  case "User":
    document.write("create an account, update data");
}
  
//#6: ternary statements
var favoriteMovie = "Seven";

var message = (confirm("Did you like " + favoriteMovie)) ? 
              "I do too!" : "Really???";
alert(message);