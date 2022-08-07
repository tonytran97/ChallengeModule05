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

    // set increasing ID numbers to each of the buttons 
    saveBtnNumber = document.querySelectorAll(".saveBtn")[i];
    saveBtnNumber.setAttribute("id", i);

    // set increasing ID numbers to each of the buttons 
    eventColumnsNumber = document.querySelectorAll(".description")[i];
    eventColumnsNumber.setAttribute("id", i + 9);
}

// retrieving the saved information and displaying it in the specific timeblock
document.getElementById("9").textContent = localStorage.getItem("0");
document.getElementById("10").textContent = localStorage.getItem("1");
document.getElementById("11").textContent = localStorage.getItem("2");
document.getElementById("12").textContent = localStorage.getItem("3");
document.getElementById("13").textContent = localStorage.getItem("4");
document.getElementById("14").textContent = localStorage.getItem("5");
document.getElementById("15").textContent = localStorage.getItem("6");
document.getElementById("16").textContent = localStorage.getItem("7");
document.getElementById("17").textContent = localStorage.getItem("8");

// function to color-code the time blocks
function color() {
    if ((i + workHours) == currentHour) {
        eventColumns.addClass("present");
    } else if ((i + workHours) < currentHour) {
        eventColumns.addClass("past");
    } else
        eventColumns.addClass("future");
}

// nearby information is collected based on which button is clicked
$(".saveBtn").on("click", function () {
    console.log(this);
    var textInput = $(this).siblings(".description").val();
    var hour = $(this).attr("id");

    // information is stored
    localStorage.setItem(hour, textInput);
})