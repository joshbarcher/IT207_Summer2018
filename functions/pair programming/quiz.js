var question = generateQuestion("Do female deer grow antlers?", "Always", "Never", "Rarely", "Often");
var element = document.getElementById("question");
element.innerHTML = question;

var button = document.getElementById("solve");
button.onclick = function() {
  var answer = parseInt(prompt("Enter an answer"));
  if (answer == 3)
  {
    alert("Correct!");
  }
  else
  {
    alert("Incorrect, the correct answer is #3");
  }
};

function generateQuestion(description, op1, op2, op3, op4)
{
  return description + "<br>1. " + op1 + "<br>2. " + op2 + "<br>3. " + op3 + "<br>4. " + op4;
}