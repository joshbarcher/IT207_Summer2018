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
  
  var everyColor = "rgba(0,135,255,1)";
  var otherColor = "rgba(255,13,0,1)";
  
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
}
       
       
       
       
       
       
       
       
       
       
       
       
       