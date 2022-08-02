// displays current date
var currentDay = moment().format("dddd, MMMM Do YYYY h:mma");
$("#currentDay").text(currentDay);

// hours in a standard business job (9AM-5PM)
var workHours = 9;

// for loop to generate the time blocks in this day
for (i = 0; i < workHours; i++) {
    var columns = $("<div>");
    columns.addClass("row align-items-end");

    var timeColumns = $("<div>");
    timeColumns.addClass("col-2");
    if (i <= 2) {
        timeColumns.text(i + workHours + ":00AM");
    } else if (i == 3) {
        timeColumns.text(i + workHours + ":00PM");
    } else
        timeColumns.text(i + workHours - 12 + ":00PM");

    var eventColumns = $("<div>");
    eventColumns.addClass("col-8");

    var saveBtn = $("<button>");
    saveBtn.addClass("col-2");

    $(".container").append(columns);
    columns.append(timeColumns);
    columns.append(eventColumns);
    columns.append(saveBtn);
}
