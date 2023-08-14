var susDate = new Date();
var day = susDate.getDate();
var month = susDate.getMonth();
var year = susDate.getFullYear();
var susDateFormat = month + 1 + "/" + day + "/" + year;

var endDate = "3/21/2023"

if (susDateFormat >= endDate) {
   // console.log("Yes")
}
// var todaysDate = new Date();

// todaysDate.toLocaleDateString();
// console.log(todaysDate)
// var eventDate = new Date()
// eventDate.setDate(eventDate.getDate() +  2)
// eventDate.toLocaleDateString();
// console.log(eventDate)

var todaysDate = new Date();
var eventDate = new Date();
eventDate.setDate(eventDate.getDate() + 2);

// Check if eventDate is within 2 days of todaysDate
if (eventDate.getTime() <= todaysDate.getTime() + 2 * 24 * 60 * 60 * 1000) {
   console.log('Event is within 2 days of today!');
} else {
  console.log('Event is not within 2 days of today.');
}
