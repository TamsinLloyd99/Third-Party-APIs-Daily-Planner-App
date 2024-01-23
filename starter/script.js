//mainly to save new css features to the timeslots and input information into local storage
//set up automatic color changes as time passes
//display day at the top of the page


// console.log(currentDate);
var todaysDate = dayjs().format("dddd, MMMM DD");
$("#currentDay").text(todaysDate);


function pageLoad (){
//display current date at top of page
//create timeblocks for standard business hours
}

function colorBlock (){
    //Color-code each timeblock based on past, present, and future when the timeblock is viewed.
    //using jquery to change css properties
}

//event listener - function
//allows a user to enter an event when they click a timeblock
//saves the event in local storage when the save button is clicked in that timeblock.


//Persist events between refreshes of a page using local storage