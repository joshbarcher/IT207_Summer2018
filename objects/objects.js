//#1: how to create objects
//********************************************

var fullName = {
  title: "Mr.",
  fName: "Josh",
  lName: "Archer",
  middleInit: "B"
};

console.log(fullName);

//print out a nice full name
console.log(fullName.title + " " + fullName.fName + " " + 
            fullName.middleInit + ". " + fullName.lName);

var ourClass = {
  title: "Web Design with JS",
  seats: 24,
  projectorAvailable: true,
  students: ["Carmen", "Michael", "Bruce", "Sang"],
  addToClass: addStudent,
  seatsAvailable: seats
};

function addStudent(newStudent) {
  //this refers to the object defined in the variable ourClass
  this.students.push(newStudent);
}

function seats() {
  return this.seats - this.students.length;
}
  
console.log("Welcome to " + ourClass.title);

//add a few students
console.log("Before: " + ourClass.students);
ourClass.addToClass("Josh");
console.log("After: " + ourClass.students);

console.log("Available seats: " + ourClass.seatsAvailable());

//redundant code
var earlierClass = {
  title: "Java 2",
  seats: 24,
  projectorAvailable: true,
  students: ["Michael", "Josh", "Sang"],
  addToClass: addStudent,
  seatsAvailable: seats
};

//#2: we can dynamically add members to a class (properties, methods)
//********************************************

ourClass.isLab = true;
console.log(ourClass);

var fruit = {};
fruit.isTasty = true;
fruit.name = "Mango";
fruit.eat = function() {
  console.log("You ate " + this.name);
};

fruit["pricePerPound"] = 1.99;
fruit["favorite"] = true;

console.log(fruit.pricePerPound); //1.99
console.log(fruit.pricePerKilo); //undefined
console.log(fruit["favorite"]);

//define an property that is defined but not yet assigned a (proper) value
fruit["seeds"] = null;
console.log(fruit.seeds); //null

//#3: nested objects
//********************************************

var movie = {
  title: "The Silence of the Lambs",
  genre: "Horror",
  length: 120,
  
  director: {
    fName: "Jonathan",
    lName: "Demme",
    toString: function() {
      return this.fName + " " + this.lName;
    }
  },
  
  actors: [{fName: "Anthony", lName: "Hopkins"}, 
           {fName: "Jody", lName: "Foster"}]
}

console.log(movie.director.fName);
console.log(movie.director.toString());
console.log(movie.actors[0].fName); //what will this print out?

//#4: inspect or remove members
//********************************************

//looping over properties
for (var property in fruit)
{
  //only consider properties I defined (above) for fruit
  if (fruit.hasOwnProperty(property))
  {
    console.log(property + " is a property of the fruit type");
  }
}

//remove properties
console.log(fruit.isTasty);
delete fruit.isTasty;
console.log(fruit.isTasty);

//#5: objects are maps
//********************************************

var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing \
                  elit. Curabitur semper volutpat nisi at dictum. Sed \
                  tincidunt justo eu pharetra aliquet. Donec risus lectus, \
                  commodo nec condimentum ut, aliquam a turpis. Donec \
                  tincidunt, nisi eu rutrum faucibus, enim orci pulvinar \
                  ipsum, in elementum urna ante eu nulla. In viverra gravida \
                  sagittis. Pellentesque nibh sem, pretium et eros \
                  tincidunt, rhoncus aliquet ligula. Vestibulum et erat \
                  quis quam mollis laoreet. Etiam semper lacus sit amet \
                  ultrices ullamcorper. Maecenas pulvinar pretium arcu, \
                  id placerat lectus aliquet vitae. Nulla facilisi. Sed \
                  consectetur, tellus ut tempus imperdiet, mi erat euismod \
                  enim, pharetra varius lorem libero sed augue. In hac \
                  habitasse platea dictumst. Vestibulum non neque massa. \
                  Nam mattis odio in purus auctor, ut egestas urna placerat. \
                  Curabitur ut convallis lectus.";

//store a mapping of characters to frequencies
var counts = {};
for (var i = 0; i < loremIpsum.length; i++)
{
  var character = loremIpsum[i];
  
  //have I seen this character before, if not add it to the map
  if (!(character in counts))
  {
    counts[character] = 0;
  }
  counts[character]++;
}

//print out the frequency of all characters
for (var character in counts)
{
  console.log(character + ": " + counts[character]);
}

//#6: we can create similar objects using "function constructors"
//********************************************

function Circle(newRadius, newColor)
{
  //define attributes for a "Circle" object
  this.radius = newRadius;
  this.color = newColor;
  this.PI = Math.PI;
  
  this.area = function() {
    return this.PI * this.radius ** 2;
  }
}

var circleOne = new Circle(2, "purple");
console.log("Color: " + circleOne.color);
console.log("Radius: " + circleOne.radius);
console.log("Area: " + circleOne.area());

var circleTwo = new Circle(3, "pink");
console.log("Color: " + circleTwo.color);
console.log("Radius: " + circleTwo.radius);
console.log("Area: " + circleTwo.area());












