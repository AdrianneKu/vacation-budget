var tripInfoButton = document.querySelector(".trip-info");
var dailyBudget = document.querySelector(".daily-budget");

var tripInfo = function () {
  var totalBudget = Number(
    prompt("What is your total budget for this trip? (ex: 1000.00)")
  );
  var accomodation = Number(
    prompt("What are your accomodation costs? (ex: 125.50)")
  );
  var numDays = Number(
    prompt("How many days does your trip last? (must be a number)")
  );

  calculateDailyBudget(totalBudget, accomodation, numDays);
};

var calculateDailyBudget = function (totalBudget, accomodation, numDays) {
  var daily = ((totalBudget - accomodation) / numDays).toFixed(2);

  dailyBudget.innerText = `You can spend $${daily} a day on food and fun!`;
};

tripInfoButton.addEventListener("click", tripInfo);
