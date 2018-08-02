//assigning event handlers
//********************************************

//this function will execute when page elements have loaded
window.onload = function() {
  print("window loaded");
}

window.addEventListener("load", function() {
  print("Another handler");
});

window.addEventListener("load", function() {
  print("Even another handler");
});

//older versions of IE use an alternate notation
//********************************************

//check if addEventListener() is defined
if (window.addEventListener)
{
  window.addEventListener("load", function() {
    print("One more handler");
  });
}
else
{
  window.attachEvent("load", function() {
    print("One more handler");
  });
}

//mouse events
//********************************************

window.addEventListener("load", function() {
  var button = document.getElementsByTagName("button")[0];
  
  button.onclick = click;
  button.onmouseup = mouseUp;
  button.onmousedown = mouseDown;
  button.onmouseenter = mouseEnter;
  button.onmouseleave = mouseLeave;
  button.onmousemove = mouseMove;
});

function click()
{
  print("mouse click");
}

function mouseUp()
{
  print("mouse up");
}

function mouseDown()
{
  print("mouse down");
}

function mouseEnter()
{
  print("mouse enter");
}

function mouseLeave()
{
  print("mouse leave");
}

function mouseMove(event)
{
  var button = document.getElementsByTagName("button")[0];
  button.innerHTML = "Click me! (" + event.clientX + ", " + 
                      event.clientY + ")";
}

function print(message)
{
  var console = document.getElementById("console");
  console.innerHTML = message + "\n" + console.innerHTML;
}

//focus events
//********************************************

window.addEventListener("load", function() {
  //select the text box
  var textBox = document.querySelector('input[name="full-name"]');
  
  //register the events
  textBox.onfocus = gainFocus;
  textBox.onblur = loseFocus;
});

function gainFocus()
{
  this.value = "";
}

function loseFocus()
{
  //if invalid name length
  if (this.value.length <= 2)
  {
    //display error message
    var errorSpan = document.querySelector("span");
    errorSpan.style.display = "inline";
  }
}

//key events
//********************************************

window.addEventListener("load", function() {
  //select the text box
  var textBox = document.querySelector('input[name="phone-number"]');
  
  //register the events
  textBox.onkeypress = updatePhone;
});

function updatePhone(event)
{
  //prevent the default behavior of this event (adding a character to the textbox)
  event.preventDefault();
  
  //make sure this is a numeric key
  var key = event.charCode;
  if (key < 48 || key > 57)
  {
    console.log("bad key");
    return; //ignore this key
  }
  
  console.log("good key");
  
  //this.value += event.key;
}












