//#1: creating date/time values
//******************************************

var now = new Date();

//the month is within the range: [0, 11] 
var tomorrow = new Date(2018, 06, 19);
var tomorrowAtNoon = new Date(2018, 06, 19, 12, 30);

console.log(tomorrowAtNoon);

//#2: how do we access date/time parts?
//******************************************

//time components
var hours = now.getHours();
var minutes = now.getMinutes();

//date components
var month = now.getMonth();
var year = now.getFullYear();
var day = now.getDay();

console.log(month + "/" + day + "/" + year + " " + 
            hours + ":" + minutes);

//#3: How do we format dates?
//******************************************

var options = {
  weekday: "short",
  day: "numeric",
  month: "long",
  year: "numeric",
  hour12: true,
  hour: "numeric",
  minute: "numeric"
};

var formattedDate = now.toLocaleString("en-us", options);
console.log(formattedDate);

//#4: how to we calculate date differences?
//******************************************

//how many days since the 4th of July?
var theFourth = new Date("07/04/2018");
var now = new Date();

var diffInMillis = now.getTime() - theFourth.getTime();

//how many milliseconds in a day?
const MILLIS_IN_DAY = 1000 * 60 * 60 * 24;

var daysSinceTheFourth = diffInMillis / MILLIS_IN_DAY;
console.log("Days since: " + daysSinceTheFourth);