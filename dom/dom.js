//#1: selecting individual elements
//***************************************************

selectingSingleElements();

function selectingSingleElements()
{
  var header = document.getElementById("page-header");
  
  header.innerHTML = "Welcome to my web &gt;&gt;&gt; page!";
}

//#2: selecting groups of elements
//***************************************************

selectingMultipleElements();

function selectingMultipleElements()
{
  //when selecting elements by class you receive an HTMLCollection
  var everyElements = document.getElementsByClassName("every");
  var otherElements = document.getElementsByClassName("other");
  
  var everyColor = "rgba(0,135,255,0.2)";
  var otherColor = "rgba(255,13,0,0.2)";
  
  for (var i = 0; i < everyElements.length; i++)
  {
    //apply a style to all elements
    everyElements[i].style.backgroundColor = everyColor;
  }
  
  for (var i = 0; i < otherElements.length; i++)
  {
    otherElements[i].style.backgroundColor = otherColor;
  }
  
  //when selecting elements by tag you receive an HTMLCollection
  var paragraphs = document.getElementsByTagName("p");
  for (var i = 0; i < paragraphs.length; i++)
  {
    paragraphs[i].style.margin = "20px";
  }
  
  //when selecting elements with css selectors you receive a NodeList
  var quotes = document.querySelectorAll("p span.quote");
  for (var i = 0; i < quotes.length; i++)
  {
    var element = quotes[i];
    
    element.style.display = "block";
    element.style.fontStyle = "italic";
    element.style.margin = "10px 30px";
    element.textContent = '"' + element.textContent + '"';
  }
}

//#3: traverse the dom
//***************************************************
      
traversingTheDom();

function traversingTheDom()
{
  //how to identify parent elements
  var quotes = document.querySelectorAll("p span.quote");
  for (var i = 0; i < quotes.length; i++)
  {
    var quote = quotes[i];
    var paragraph = quote.parentNode;
    
    paragraph.style.backgroundColor = "rgb(220, 220, 220)";
    paragraph.style.borderRadius = "5px";
    paragraph.style.padding = "8px";
  }
  
  //how to identify sibling elements
  var element = document.body.firstChild;
  while (element !== null)
  {
    //only observe nodes that are elements on the page
    if (element.nodeType === Node.ELEMENT_NODE)
    {
      //print the element
      console.log(element);
    }
    
    element = element.nextSibling;
  }
  
  //how to identify child elements
  var table = document.getElementById("contact-table");
  
  //table --> thead --> tr
  var headerRow = table.firstElementChild.firstElementChild; 
  var children = headerRow.children;
  
  for (var i = 0; i < children.length; i++)
  {
    children[i].style.textDecoration = "underline";
  }
}
     
//#4: adding elements to the DOM
//***************************************************  

addingElementsToTheDOM();

function addingElementsToTheDOM()
{
  //select the body to add new elements
  var body = document.getElementsByTagName("body")[0];
  
  //formally register a new element with the DOM
  var hr = document.createElement("hr");
  
  //add the element as a child of another element
  body.appendChild(hr);
  
  //add several links to the end of our list items
  var items = document.getElementsByTagName("li");
  for (var i = 0; i < items.length; i++)
  {
    var link = document.createElement("a");
    var space = document.createTextNode(" "); 
    
    //assign attributes for a link to google
    link.href = "http://www.google.com";
    link.innerHTML = "Google it!";
    
    items[i].appendChild(space);
    items[i].appendChild(link);
  }
}
       
//adding table records example
//***************************************************************

document.getElementsByTagName("button")[0].onclick = addRecord;

function addRecord()
{
  var table = document.getElementById("contact-table");
  var body = table.lastElementChild;

  //retrieve user data
  var name = prompt("Please enter your name!");
  var email = prompt("Please enter your email!");
  var phoneNumber = prompt("Please enter your phone number!");

  //create a new row
  var row = document.createElement("tr");

  //create new cells
  var cell1 = getTableCell(name);
  var cell2 = getTableCell(email);
  var cell3 = getTableCell(phoneNumber);

  //assemble!
  row.appendChild(cell1);
  row.appendChild(cell2);
  row.appendChild(cell3);

  body.appendChild(row);
}

function getTableCell(text)
{
  var cell = document.createElement("td");
  cell.textContent = text;

  return cell;
}
       
       
       
  





       
       
       
       
       
       