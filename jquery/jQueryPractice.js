$(document).ready(function() {
  jquerySelectors();
});

function jquerySelectors()
{
  var paragraphs = $("p.interesting");
  paragraphs.css("background-color", "rgb(220, 220, 220)");
  paragraphs.css("padding", "6px");
  
  //method chaining!
  $("span.quote").css("display", "block")
                 .css("margin", "10px 30px")
                 .css("font-style", "italic");
}

function jqueryEvents()
{
  //basic events
  $("span.quote").click(function() {
    
  });
  
  //alternative syntax
  
  //jquery-specific events (meta-events)
}