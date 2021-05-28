var today = moment();
$("#currentDay").text(today.format("[Today is] dddd, MMMM Do"));

// breaks down hour-list object inot array of time/todo/savebutton div rows
var hourList = $("#hour-list > div");
var workHours = 8;

console.log(typeof workHours);

console.log($("#hour-list > div"));

console.log( $( ".row" ).children() );

var hourBlock = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];


// do while 
// clones the row of bootstrap columns that make up one hour on the schedule
// and gives each new row a unique ID
// as long as the parent element has less than 9 children
do {    
    // timeStamp is a clone of the DOM element with the ID time 
    var timeStamp = $("#time").clone();
    // newId generates the ID each new element will receive
    // which is the declared string + the number of the length of the parent element added to the end
    var newId = ("time" + ($(".time-block > div").length));
    // each the string within the ID attribute for each timeStamp will be teh newId created at the same time
    timeStamp.attr("id", newId);
    // when a new timeStamp is created the id time will be found and replaced with the newId
    timeStamp.find("#time").attr(newId);
    // the new timeStamp element is added to the element with the class of time-block (the column that contains all schedule hour rows)
    timeStamp.appendTo(".time-block");
}  while ($(".time-block > div").length < 9);