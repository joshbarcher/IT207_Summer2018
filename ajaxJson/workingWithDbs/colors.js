$(document).ready(function() {
  
  //load colors into the table
  loadAllColorsOnStart();
  
  //assign form button event handler
  $('button[type="submit"]').click(addNewColor);
});

function addNewColor(event)
{
  //stop the form from submitting
  event.preventDefault();
  
  //read in my form values
  var color = {
    name: $('input[name="name"]').val(),
    red: $('input[name="red"]').val(),
    green: $('input[name="green"]').val(),
    blue: $('input[name="blue"]').val()
  };
  
  //update our UI
  $("#colorsTable tbody").append(getTableRow(color));
  $("input").val("");
 
  //send the data to the server
  addNewColorToDb(color);
}

function addNewColorToDb(color)
{
  var options = {
    type: "get",
    url: "ajax.php",
    cache: false,
    data: {
      command: "insert",
      red: color.red,
      green: color.green,
      blue: color.blue,
      name: color.name
    },
    success: function(data) {
      //we're good, success!
    },
    error: function(response, status, error) {
      alert("Error: " + error);
    }
  };
  
  $.ajax(options);
}

function loadAllColorsOnStart()
{
  var options = {
    type: "get",
    url: "ajax.php",
    cache: false,
    data: {
      command: "retrieve"
    },
    success: function(data) {
      buildInitialTable(JSON.parse(data));
    },
    error: function(response, status, error) {
      alert("Error: " + error);
    }
  };
  
  $.ajax(options);
}

function buildInitialTable(colors)
{
  for (var i = 0; i < colors.length; i++)
  {
    var color = colors[i];
    
    var newRow = getTableRow(color);
    $("#colorsTable tbody").append(newRow);
  }
}

function getTableRow(color)
{
  var rgbString = "rgb(" + color.red + ", " + color.green + ", " + color.blue + ")";
  var preview = '<div style="width: 30px; height: 30px; background-color: ' + 
                rgbString + ';"></div>'
  var row = $("<tr><td>" + color.name + "</td><td>" + color.red + 
              "</td><td>" + color.green + "</td><td>" + color.blue + 
              "</td><td>" + preview + "</td></tr>");
  
  return row;
}










