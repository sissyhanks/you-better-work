// grabs today's date and displays in #currentDay element
var today = moment();
$( "#currentDay" ).text(today.format( "[Today is] dddd, MMMM Do" ));

// breaks down hour-list object into array of time/todo/save button div rows
var hourList = $( "#hour-list > div" );
var workHours = 8;

// text that will go into the hour div of each cloned row
var hourBlock = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

// military time moment return
var mTime = moment().format("HH");

// makes as many clones of the bootstrap hour entry row element and their index items in the hourBlock array
// adds them to the parent column (.time-block) that makes up the planner body 
// gives each new row element a unique ID and changes the text of the hour listed on each row
for (i = 0; i < hourBlock.length; i++) {   
    var timeStamp = $( "#time09" ).clone();
    var newId = ( "time" + (($( ".time-block > div" ).length)+9));

    timeStamp.attr( "id", newId);
    timeStamp.find( "#time09" ).attr(newId);
    timeStamp.appendTo( ".time-block" );
    $( ".hour" ).last().text(hourBlock[i]);
}  

// loops through each row child of the .time-block div
// gets the last 2 numbers of each row's ID and compares them to moment's military time 
// compares the last 2 characters of row's ID to military time and changes color of row's text area based on time relation to current hour
for (let i = 0; i < ($( ".time-block > div" ).length); i++){
    var compTime = $( ".row" )[i];
    var colorChange = $( ".row > .toDo" )[i];
    var id = $(compTime).attr( "id" ).slice(-2);

    if (id < mTime){
        $(this.colorChange).addClass( "past" );
    } else if (id === mTime){
        $(this.colorChange).addClass( "present" );
    } else if (id > mTime){
        $(this.colorChange).addClass( "future" );
    }
}

// holds local storage key value >> pares with value stored in loVal 
var loKey;

// holds stringified item from memory
var deathDance;

// loops through the rows that are children of the time block div as many times as there are rows
// identifies each row's ID as the key name of row's item to be remembered
// looks in memory for a value associated with the row's key and if there is one displays it as text in the row's text area 
for  (let i = 0; i< ($( ".time-block > div" ).length); i++){
    // grabs the row the loop is on
    var compRow = $( ".row" )[i];
    var textRow = $( ".row > .toDo" )[i];
    loKey = $(compRow).attr( "id" );
    deathDance = localStorage.getItem(JSON.stringify(loKey))
    textRow.innerText = JSON.parse(deathDance);
}

// click function listens for any button being clicked & grabs the text from the text area that is the clicked button's sibling
// in local memory stores the key 
// = id of div that is the parent of the button clicked
// and value
// that is the text entered into the textarea sibling of the button clicked
$( "button" ).click(function(){
        loKey = $(this).parent().attr("id");
        var loVal = $(this).siblings("textarea").val();

        localStorage.setItem(JSON.stringify(loKey), JSON.stringify(loVal));
    });