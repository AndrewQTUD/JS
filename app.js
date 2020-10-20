var date1, date2;

date1 = new Date("Oct 1, 2020 08:30:00");
document.write("" + date1);

date2 = new Date("Oct 1, 2020 19:00:00");
document.write("<br>" + date2);

var res = Math.abs(date1 - date2) / 1000;

// get total days between two dates
var days = Math.floor(res / 86400);
document.write("<br>Difference (Days): " + days);

// get hours
var hours = Math.floor(res / 3600) % 24;
document.write("<br>Difference (Hours): " + hours);

// get minutes
var minutes = Math.floor(res / 60) % 60;
document.write("<br>Difference (Minutes): " + minutes);

// get seconds
var seconds = res % 60;
document.write("<br>Difference (Seconds): " + seconds);
