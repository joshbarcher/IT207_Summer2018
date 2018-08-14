$(document).ready(function() {
  $("button").click(loadClub);
});

function loadClub()
{
  //make an ajax call for the data in the JSON file
  var options = {
    type: "GET",
    url: "club.json",
    dataType: "JSON",
    data: {},
    success: loadUI,
    error: function(xhr, status, error) {
      console.log("There was an error: " + error);
    }
  };
  
  $.ajax(options);
}

function loadUI(data)
{
  $("h1").html(data.title);
}