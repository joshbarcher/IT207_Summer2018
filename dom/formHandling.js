window.onload = function() {
  document.querySelector("button").onclick = function(event) {
    //this will stop the default behavior (form submitting)
    event.preventDefault();
    
    //most control values can be accessed using the value attribute
    var name = document.querySelector('input[name="full-name"]').value;
    var state = document.querySelector('select[name="state"]').value;
    
    console.log(name);
    console.log(state);
    
    //determine which radio button is selected...
    console.log("Gender: " + getRadioValue("gender"));
    
    var boxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < boxes.length; i++)
    {
      if (boxes[i].checked)
      {
        console.log(boxes[i].name + ": " + boxes[i].value);
      }
    }
  };
};

function getRadioValue(name)
{
  //short way (awesome!)
  var radio = document.querySelector('input[name="' + name + '"]:checked');
  return radio.value;
  
  //long way
  /*
  var radios = document.querySelectorAll('input[name="' + name + '"]');
  var value = "";
  for (var i = 0; i < radios.length; i++)
  {
    if (radios[i].checked)
    {
      value = radios[i].value;
    }
  }
  return value;*/
}






