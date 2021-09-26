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

let addTimeBlock = "<div></div>";
for (let i = 1; i <= 24; i++) {
    let addHour = `${i} am`;
    if (i == 12) {
        addHour = `${i} pm`;
    }
    if (i > 12) {
        addHour = `${i - 12} pm`;
        if (i === 24) {
            addHour = "12 am";
        }
    }




    
}