// current date & time //
let currentHour = moment().hour();

let date = new Date ();
let startingHour = date.getHours();

function renderClock() {
  $("#currentDay").text(moment().format("LLLL"));
  
  if (currentHour > startingHour) {
      updateTimeBlocks();
  }
}

setInterval(renderClock, 1000);
