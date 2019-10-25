//Declare arrays

var maleAkanGhana = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "KOfi",
  "Kwame"
];
var femaleAkanGhana = [
  "Akosua",
  "Adwoa",
  "Abenaa",
  "Akua",
  "Yaw",
  "Afua",
  "Ama"
];
var daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wensday",
  "Thursday",
  "Friday",
  "Saturday"
];

//Hide bootstrap button

document.getElementById("display").style.display = "none";

//called when submit button is clicked

function display() {
  var day = daysOfTheWeek[calculateDay()];
  var name = getAkanGhana();
  document.getElementById("day").innerHTML = day;
  document.getElementById("name").innerHTML = name;
  document.getElementById("display").style.display = "block";
}
