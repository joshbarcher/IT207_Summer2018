var movieTitle = "Phantom of the Opera";

//#1: access characters by index
//***********************************************

//finding a character
var character = movieTitle.charAt(4); //"t"
document.write(character + "<br>");

character = movieTitle.charAt(1); //"h"
document.write(character + "<br>");

//last character?
character = movieTitle.charAt(movieTitle.length - 1); //"a"
document.write(character + "<br>");

//finding an index
var index = movieTitle.indexOf("ant");
document.write(index + "<br>");

index = movieTitle.indexOf("tom");
document.write(index + "<br>");

//searches are case-sensitive, missing values return -1
index = movieTitle.indexOf("Ant");
document.write(index + "<br>");

//using our function
document.write(indexOfIgnoreCase(movieTitle, "Ant") + "<br>");

function indexOfIgnoreCase(source, search)
{
  return source.toLowerCase().indexOf(search.toLowerCase());
}

//#2: strings are immutable
//***********************************************

var bookTitle = "Art of Computer Science";

//change the book title and print it out
bookTitle.toUpperCase();
document.write(bookTitle + "<br>");

//#1
var upper = bookTitle.toUpperCase();
document.write(upper + "<br>");
 
//#2
bookTitle = bookTitle.toUpperCase(); //lose the old string
document.write(bookTitle + "<br>");

//#3
document.write(bookTitle.toUpperCase() + "<br>");

//#3: searching strings
//***********************************************

if (stringContains(bookTitle, "of"))
{
  document.write("Found 'of' in " + bookTitle + "<br>");
}

function stringContains(source, search)
{
  var index = indexOfIgnoreCase(source, search);
  return index != -1;
}

//look for patterns with regex (regular expressions)
var myInfo = "You can call me at 366-889-8282 later today!";
if (myInfo.match(/\d{3}-\d{3}-\d{4}/))
{
  document.write("Contains a phone number<br>");
}
else
{
  document.write("Does not contain a phone number<br>");
}

//#4: pulling strings apart
//***********************************************

var phoneNumber = "1-366-889-8282";
var parts = phoneNumber.split("-");
console.log(parts);

//loops over the indices of the array
for (var i = 0; i < parts.length; i++)
{
  var num = parts[i];
  document.write(num + "<br>");
}

var part = phoneNumber.substring(0, 3);
console.log(part);

part = phoneNumber.substring(3);
console.log(part);

//#5: string analysis
//***********************************************

var sentence = "The numbers 42, 40, and 20 are my favorites";

//loop over and inspect each character
var count = 0;
for (var i = 0; i < sentence.length; i++)
{
  var character = sentence.charAt(i);
  if (isNumeric(character))
  {
    count++;
  }
}
document.write("Number of digits: " + count + "<br>");

//helper function to determine if a value is a number
function isNumeric(value)
{
  return !isNaN(parseFloat(value));
}




