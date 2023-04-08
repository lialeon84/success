var susDate = new Date();
var day = susDate.getDate();
var month = susDate.getMonth();
var year = susDate.getFullYear();
var susDateFormat = month + 1 + "/" + day + "/" + year;

var endDate = "3/21/2023"

if (susDateFormat >= endDate) {
    console.log("Yes")
}