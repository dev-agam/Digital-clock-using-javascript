function clock() {
    let time = new Date();

    let hour = time.getHours(),
        min = time.getMinutes(),
        sec = time.getSeconds(),
        am_pm = "AM";

    var timeHtml = document.querySelector("#time");

    if(hour > 12){
        hour -= 12;
        am_pm = "PM";

        hour = hour < 10 ? "0" + hour : hour;
    }
    if(hour == 0){
        hour = 12;
        am_pm = "AM";

        min = min < 10 ? "0" + min : min;
    }

    var current_time = hour + " : " + min + " : " + sec + " " + am_pm;
    timeHtml.innerHTML = current_time;    

}

function getDate(){
    var time = new Date();

    let day = time.getDate(),
        monthNum = time.getMonth(),
        year = time.getFullYear();
    var dateHtml = document.querySelector("#date");
    var monthHtml = document.querySelector("#month");
    var yearHtml = document.querySelector("#year");
    var month = "";

    dateHtml.innerHTML = day;
    switch (monthNum){
        case 1 : month =  "Jan";break;
        case 2 : month = "Feb";break;
        case 3 : month = "Mar";break;
        case 4 : month = "Apr";break;
        case 5 : month = "May";break;
        case 6 : month = "Jun";break;
        case 7 : month = "Jul";break;
        case 8 : month = "Aug";break;
        case 9 : month = "Sep";break;
        case 10 : month = "Oct";break;
        case 11 : month = "Nov";break;
        case 12 : month = "Dec";break;
    }
    monthHtml.innerHTML = month;
    yearHtml.innerHTML = year;
    
    
}
setInterval(clock, 1000);
clock();
getDate();
