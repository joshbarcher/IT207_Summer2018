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
  
  //print out meeting times
  var times = data["meeting times"];
  var output = "";
  for (var day in times)
  {
    var meetingOnDay = times[day];
    if (meetingOnDay)
    {
      output += "We are meeting on " + day + "<br>";
    }
  }
  
  $("p#meeting-times").html(output);
  
  var membersList = $("ul#members");
  for (var i = 0; i < data.members.length; i++)
  {
    membersList.append("<li>" + data.members[i] + "</li>");
  }
}










