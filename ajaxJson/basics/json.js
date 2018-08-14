$(document).ready(function() {
  //JSON is a data-interchange format
  //***************************************************
  
  var person = '{"first": "Bob", "last": "Smith"}';
  var hikes = '[{"place": "Mt. Rainier", "distance": "3"}, \
                {"place": "Olympic National Park", "distance": "5"}]';
  
  
  //JSON and JavaScript objects are not the same!!!
  //***************************************************
  
  //convert my JSON text to JavaScript objects
  var personObject = JSON.parse(person);
  var hikesObject = JSON.parse(hikes);
  
  console.log(person);
  console.log(personObject);
  console.log(hikes);
  console.log(hikesObject);
  
  //convert an object to JSON format (just a string!)
  //***************************************************
  var favoriteThings = {
    book: "A Modest Proposal",
    movies: ["Hostiles", "Mission Impossible: Fallout", 
             "Peewee's Big Adventure"],
    "programming language": {
      language: "C#",
      provider: "Microsoft"
    }
  };
  
  console.log(favoriteThings);
  
  //convert with stringify() function
  var favoritesAsJson = JSON.stringify(favoriteThings);
  console.log(favoritesAsJson);
});

//things you cannot do in JSON text
//***************************************************

//#1 - attributes must be in quotes

//#2 - A base object or array can be stored

//#3 - You cannot include functions on your objects (methods)









