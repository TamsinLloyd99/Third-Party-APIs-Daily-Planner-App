//mainly to save new css features to the timeslots and input information into local storage
//set up automatic color changes as time passes
//display day at the top of the page


// console.log(currentDate);
var todaysDate = dayjs().format("dddd, MMMM DD");
$("#currentDay").text(todaysDate);



$(document).ready(function(){
    var containerEL = $('.container');
    for (let i = 9; i <= 17; i++) {
        var timeBlock = `
        <div class="row time-block">
            <div class="hour">${i}:00</div>
            <div class="description"></div>
            <button class="saveBtn"><i class="fas fa-save"></i></button>
        </div>
        `;
        containerEL.append(timeBlock);
        colorBlock();
    
}

console.log("Page loaded");
});
//create timeblocks for standard business hours


var currentDate = new Date();
// console.log(currentDate);
var currentHour = currentDate.getHours();
console.log(currentHour);

function colorBlock (){
    $('.time-block').each(function(){
var time = parseInt($(this).find('.hour').text());
console.log(time);

if (time < currentHour) {
    $(this).addClass('past');
} else if (time === currentHour) {
    $(this).removeClass('past');
    $(this).addClass('present');
} else {
    $(this).removeClass('past');
    $(this).removeClass('present');
    $(this).addClass('future');
}
    //Color-code each timeblock based on past, present, and future when the timeblock is viewed.
    //using jquery to change css properties
});
}



//event listener - function
//allows a user to enter an event when they click a timeblock
//saves the event in local storage when the save button is clicked in that timeblock.


//Persist events between refreshes of a page using local storage