// displays current date
var currentDay = moment().format("dddd, MMMM Do YYYY h:mma");
$("#currentDay").text(currentDay);

var currentHour = moment().format("h");

// hours in a standard business job (9AM-5PM)
var workHours = 9;

// for loop to generate the time blocks in this day
for (i = 0; i < workHours; i++) {
    var columns = $("<div>");
    columns.addClass("row time-block");

    var timeColumns = $("<div>");
    timeColumns.addClass("col-2 hour");
    if (i <= 2) {
        timeColumns.text(i + workHours + ":00AM");
    } else if (i == 3) {
        timeColumns.text(i + workHours + ":00PM");
    } else
        timeColumns.text(i + workHours - 12 + ":00PM");

    var eventColumns = $("<textarea>");
    // insert function for color coordinated time blocks
    eventColumns.addClass("col-8 description future");

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

