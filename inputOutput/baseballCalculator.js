/*
  Josh Archer
  6/28/2018
  baseballCalculator.js
  This calculates the batting avg and slugging % for Ichiro!
*/

//get inputs
var hits = prompt("Enter number of hits");
var atBats = prompt("Enter number of at bats");
var doubles = prompt("How many hits were doubles?");
var triples = prompt("How many hits were triples?");
var homeruns = prompt("How many hits were homeruns?");

//convert to numbers
hits = parseInt(hits);
atBats = parsent(atBats);
singles = parseInt(singles);
doubles = parseInt(doubles);
triples = parseInt(triples);
homeruns = parseInt(homeruns);

//singles not listed on stats (https://www.baseball-reference.com/players/s/suzukic01.shtml)
var singles = hits - doubles - triples - homeruns;

//calculate stats
var battingAverage = hits / atBats;
var sluggingPercentage = (singles + (2 * doubles) + (3 * triples) +
                         (4 * homeruns)) / atBats;

var stats = document.getElementById("stats");
stats.innerHTML = "Avg: " + battingAverage + 
                  "<br>slugging %: " + sluggingPercentage;