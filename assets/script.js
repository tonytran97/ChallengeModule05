// displays current date
var currentDay = moment().format("dddd, MMMM Do YYYY h:mma");
$("#currentDay").text(currentDay);

var currentHour = moment().format("H");

// hours in a standard business job (9AM-5PM)
var workHours = 9;

// for loop to generate the time blocks in this day
for (i = 0; i < workHours; i++) {
    var columns = $("<div>");
    columns.addClass("row time-block");

    var eventColumns = $("<textarea>");
    eventColumns.addClass("col-8 description");

    var timeColumns = $("<div>");
    timeColumns.addClass("col-2 hour");
    if (i <= 2) {
        timeColumns.text(i + workHours + ":00AM");
        color();
    } else if (i == 3) {
        timeColumns.text(i + workHours + ":00PM");
        color();
    } else
        timeColumns.text(i + workHours - 12 + ":00PM");
    color();

    var saveBtn = $("<button>");
    saveBtn.addClass("col-2 saveBtn");

    var saveIcon = $("<i>");
    saveIcon.addClass("fas fa-save");

    $(".container").append(columns);
    columns.append(timeColumns);
    columns.append(eventColumns);
    saveBtn.append(saveIcon);
    columns.append(saveBtn);
}

// function to color-code the time blocks
function color() {
    if ((i + workHours) == currentHour) {
        eventColumns.addClass("present");
    } else if ((i + workHours) < currentHour) {
        eventColumns.addClass("past");
    } else
        eventColumns.addClass("future");
}