/*
    The JS Homework1 from the Cursor course.
*/

var person = "John Doe";
var time = "2:00 pm";
var place = "San Francisco";
var event = prompt("Please enter the event:", "'default event'");
showMessage();

function showMessage() {
    if (event != null) {
        let message = `${person} has a ${event} today at ${time} somewhere in ${place}.`;
        document.getElementById("message").innerHTML = message;
        console.log(message);
    }
}


