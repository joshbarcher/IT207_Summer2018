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









