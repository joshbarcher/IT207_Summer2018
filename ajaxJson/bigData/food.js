$(document).ready(function() {
  $("button").click(loadData);
});

function loadData()
{
  //show the spinner
  $("img").show();
  
  //load the data
  $.getJSON("food.json", loadTable);
}

function loadTable(data)
{
  var table = $("#food-table");
  var head = $("#food-table thead");
  var body = $("#food-table tbody");
  
  //build the header for the table
  head.html("<tr><th>Food</th><th>Category</th><th>Calories</th>" + 
            "<th>Sugar</th><th>Protein</th></tr>");
  
  //build each for
  for (var i = 0; i < data.length; i++)
  {
    var food = data[i];
    
    body.append("<tr><td>" + food.Description + "</td>" + 
                "<td>" + food.Category + "</td>" +
                "<td>" + food.Data.Kilocalories + "</td>" +
                "<td>" + food.Data["Sugar Total"] + "</td>" +
                "<td>" + food.Data.Protein + "</td></tr>");
  }
  
  //hide the spinner
  $("img").hide();
  
  //apply data tables to the table
  table.DataTable();
}









