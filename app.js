
// Refresh App Function
function refresh(){
    location.reload();
}

setInterval(refresh, 30000); // 1000 = 1 second, 600000 = 10 mins



// Display Current Time
// Get Current Date & Time
let today = new Date(new Date().toLocaleString("en-US", {timeZone: "AST"})); // Alaska Time

// Gets day by integetr 0-6
let days_int = today.getDay();


// Array of all days
const days_of_the_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Gets the days of the array
let day = days_of_the_week[days_int];
// let day = "Saturday"; // for testing
// let day = "Sunday"; // for testing

let alaska = new Date(new Date().toLocaleString("en-US", {timeZone: "AST"})); 


// Get Hour
let current_hour = today.getHours();
// let current_hour = 17; //for testing

// Get minutes
let current_minute = today.getMinutes();
// let current_minute = 0; // for testing

// Variable to add a 0 in the single digits
let current_minute_full = current_minute;

// Logic to account for single digit minute
if(current_minute < 10){
    current_minute_full = "0" + current_minute;
}

// Full time 
// let current_time = "Time: " + current_hour + ":" + current_minute_full;
let current_time = `Time: ${current_hour}:${current_minute_full}`;

// Get time id in HTML
const timeID = document.getElementById("time");

// Render current time to page
timeID.innerHTML = current_time;





// Progress Bar
// Get progress ID
const progressID = document.getElementById("progress");

// Get completed ID
const completeID = document.getElementById("complete");

// Set Color of completed color
const prog_color = "Green";



// Setting variable names for stops
const vp = "Vintage Park";
const lab = "LAB";
const asp = "AK Seaplanes";
const aac = "Air Cargo";
const fsc = "Front St. Clinic";
const fsclc = "Front Street Midtown";

// Route Function
function route(){
    let status;

    if(current_hour < 9){
        status = "Current: ERG Driver hasn't started route";
        completeID.style.width = 0 + "%";
        completeID.style.backgroundColor = prog_color;
    }
    else if (current_hour == 9 && current_minute < 15){
        status = `Current: ERG Driver getting ready for run<br>Next: ${vp} & ${asp}`;
        completeID.style.width = 6 + "%";
        completeID.style.backgroundColor = prog_color;
    }
    else if(current_hour == 9 && current_minute <= 59){
        status = `Current: ${vp} & ${asp}<br>Next: ${lab}`;
        completeID.style.width = 12 + "%";
        completeID.style.backgroundColor = prog_color;
    }
    else if(current_hour == 10 && current_minute < 30){
        status = `Current: ${lab}<br>Next: ${asp}`;
        completeID.style.width = 18 + "%";
        completeID.style.backgroundColor = prog_color;
    }
    else if(current_hour == 10 && current_minute <= 59){
        status = `Current: Driver Stop at ERG<br>Next: ${asp}`;
        completeID.style.width = 24 + "%";
        completeID.style.backgroundColor = prog_color;
    }
    else if(current_hour == 11 && current_minute < 30){
        status = `Current: Driver Stop at ERG<br>Next: ${asp}`;
        completeID.style.width = 30 + "%";
        completeID.style.backgroundColor = prog_color;
    }
    else if (current_hour == 11 && current_minute <= 59){
        status = `Current: ${asp} & OTP<br>Next: ${lab}`;
        completeID.style.width = 36 + "%";
        completeID.style.backgroundColor = prog_color;
    }
    else if (current_hour == 12 && current_minute < 30){
        status = `Current: ${asp} & OTP<br>Next: ${lab}`;
        completeID.style.width = 42 + "%";
        completeID.style.backgroundColor = prog_color;
    }
    else if(current_hour == 12 && current_minute <= 59){
        status = `Current: ${lab}<br>Next: ${asp}`;
        completeID.style.width = 48 + "%";
        completeID.style.backgroundColor = prog_color;
    }
    else if(current_hour == 13 && current_minute < 30){
        status = `Current: ${vp}<br>Next: ${lab} via Front Desk OBGYN`;
        completeID.style.width = 54 + "%";
        completeID.style.backgroundColor = prog_color;
    }
    else if(current_hour == 13 && current_minute <= 59){
        status = `Current: ${lab}<br>Next: ${asp}`;
        completeID.style.width = 60 + "%";
        completeID.style.backgroundColor = prog_color;
    }
    else if(current_hour == 14 && current_minute < 15){
        status = `Current: ${lab}<br>Next: Collect at ${asp}`;
        completeID.style.width = 63 + "%";
        completeID.style.backgroundColor = prog_color;
    }
    else if(current_hour == 14 && current_minute < 45){
        status = `Current: Collect at ${asp}<br>Next: Collect at ${vp}`;
        completeID.style.width = 68 + "%";
        completeID.style.backgroundColor = prog_color;
    }
    else if(current_hour == 14 && current_minute <= 59){
        status = `Current: Collect at ${vp}<br>Next: Collect at ${fsc}`;
        completeID.style.width = 70 + "%";
        completeID.style.backgroundColor = prog_color;
    }
    else if(current_hour == 15 && current_minute >=20 && current_minute < 45 && (days_int == 1 || days_int == 3 || days_int == 5)){
        status = `Current: ${fsclc}<br>Next: ${lab}`;
        completeID.style.width = 72 + "%";
        completeID.style.backgroundColor = prog_color;
    }
    else if(current_hour == 15 && current_minute < 45){
        status = `Current: ${fsc}<br>Next: ${lab} via OBGYN`;
        completeID.style.width = 75 + "%";
        completeID.style.backgroundColor = prog_color;
    }
    else if(current_hour == 15 && current_minute >= 45){
        status = `Current: ${lab}<br>Next: ${vp}`;
        completeID.style.width = 78 + "%";
        completeID.style.backgroundColor = prog_color;
    }
    else if(current_hour == 16 && current_minute < 5){
        status = `Current: ${lab}<br>Next: ${vp}`;
        completeID.style.width = 80 + "%";
        completeID.style.backgroundColor = prog_color;
    }
    else if(current_hour == 16 && current_minute < 15){
        status = `Current: ${vp}<br>Next: ${lab}`;
        completeID.style.width = 88 + "%";
        completeID.style.backgroundColor = prog_color;
    }
    else if(current_hour == 16 && current_minute <= 59){
        status = `Current: ${lab}<br>Next: ${aac} & ${asp}`;
        completeID.style.width = 95 + "%";
        completeID.style.backgroundColor = prog_color;
    }
    else if(current_hour >= 17){
        status = "Current: ERG Driver has finshed route";
        completeID.style.width = 100 + "%";
        completeID.style.backgroundColor = prog_color;
    }
    else {
        status = "Unknown"
    }


    // Check if Weekend
    if(day === "Saturday" || day === "Sunday"){
        status = "Current: Weekend, driver not running";
        completeID.style.width = 0 + "%";

    }


    return status;
}


// Gets the route ID and renders the route status 
const routeID = document.getElementById("route");
routeID.innerHTML = route();














