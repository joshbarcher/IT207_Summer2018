//ways to send output

//1. write to the document output stream
document.write("Hello world!");

//2. use a popup
alert("Getting ready to load our page!");

//3. update the DOM (document object model)
var paragraph = document.getElementById("content");
paragraph.innerHTML = "This is getting weird now...";

//4. you can send updates for developers using the browser console
console.log("Where is Waldo?");

//ways to gather input

//1. retrieve values from form fields
var textbox = document.getElementById("user-input");
var value = textbox.value;
console.log(value);

//2. use popups 
var userTextInput = prompt("Enter your name", "Bob Smith");
console.log(userTextInput);

if (userTextInput == "Bob Smith")
{
  console.log("Are you really \"Bob Smith\"?");
}

var vegan = confirm("Are you vegan?");
console.log(vegan);

if (vegan == true)
{
  console.log("Good for you!");
}
















