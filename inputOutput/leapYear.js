//get the input year
var yearBorn = prompt("Enter the year you were born!");

//convert the year to a number
yearBorn = parseInt(yearBorn);

//verify that the type of yearBorn is number
console.log(typeof yearBorn);

var paragraph = document.getElementById("results");
var successMsg = "Your b-day of " + yearBorn + 
                        " is a leap year!";
var failureMsg = "Your b-day of " + yearBorn + 
                        " is not a leap year!":
if (yearBorn % 4 == 0)
{
  //not a leap year if divisible by 100 but not 400
  if (yearBorn % 100 == 0 && yearBorn % 400 != 0)
  {
    paragraph.innerHTML = failureMsg;
  }
  else
  {
    paragraph.innerHTML = successMsg;
  }
}
else
{
  paragraph.innerHTML = failureMsg;
}



