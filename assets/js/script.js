var today = moment();
$( "#currentDay" ).text(today.format( "[Today is] dddd, MMMM Do" ));

// breaks down hour-list object inot array of time/todo/savebutton div rows
var hourList = $( "#hour-list > div" );
var workHours = 8;

// text that will go into the hour div of each cloned row
var hourBlock = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

// military time moment return
var mTime = moment().format("HH");

// makes as many clones of the bootstrap hour entry row element as there are index items in the hourBlock array and adds them to the parent column (.time-block) that makes up the planner body 
for (i = 0; i < hourBlock.length; i++) {   
        // timeStamp is a clone of the DOM element with the ID time 
    var timeStamp = $( "#time09" ).clone();
    // newId generates the ID each new element will receive
    // which is the declared string + the number of the length of the parent element plus 9 added to the end
    // this makes the last 2 characters of each element's id the character representations of that row's hour in military time
    var newId = ( "time" + (($( ".time-block > div" ).length)+9));
    // each the string within the ID attribute for each timeStamp will be teh newId created at the same time
    timeStamp.attr( "id", newId);
    // when a new timeStamp is created the id time will be found and replaced with the newId
    timeStamp.find( "#time09" ).attr(newId);
    // the new timeStamp element is added to the element with the class of time-block (the column that contains all schedule hour rows)
    timeStamp.appendTo( ".time-block" );
    // after timestamp added to parent
    // the text for last element with the class of hour 
    // (which is a child of the the last timeStamp (the one that was just added ))
    // is changes the time text to text of the index item the loop is on
    $( ".hour" ).last().text(hourBlock[i]);
}  

// loops through each row child of the .time-block div
// gets the last 2 numbers of each row's ID and compares them to moment's military time 

// loops through the children of the .time-block div as many times as there are children
for (let i = 0; i < ($( ".time-block > div" ).length); i++){
    // grabs the child with matching index position as iteration of loop
    var compTime = $( ".row" )[i];
    // grabs text entry element of the row child with matching index position as iteration of loop
    var colorChange = $( ".row > .toDo" )[i];
    // grabs the last two characters of the compTime element's id
    var id = $(compTime).attr( "id" ).slice(-2);

// class attributes that will change the color of the text entry field are added based on how the row ID compares to current time

// if last 2 characters of current row's id are less than the current hour in military time the class attribute past is added to the text entry child of row div 
    if (id < mTime){
        $(this.colorChange).addClass( "past" );
// if last 2 characters of current row's id are equal to the current hour in military time the class attribute present is added to the text entry child of row div
    } else if (id === mTime){
        $(this.colorChange).addClass( "present" );
// if last 2 characters of current row's id are greater than the current hour in military time the class attribute future is added to the text entry child of row div
    } else if (id > mTime){
        $(this.colorChange).addClass( "future" );
    }
}

// click function listens for any button being clicked
$( "button" ).click(function(){
    // gets the id of the parent element of the button that is clicked
        var loKey = $(this).parent().attr("id");
        console.log(loKey);
        // gets the text that is entered in the text aerea that is a sibling to the button that is clicked
        var loVal = $(this).siblings("textarea").val();

        // stores the key = id of div that is the parent of the button clicked and value that is the text entered into the textarea sibling of the button clicked
        localStorage.setItem(JSON.stringify(loKey), JSON.stringify(loVal));
        console.log(localStorage.getItem(JSON.stringify(loKey)))
    });
