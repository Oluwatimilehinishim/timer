let duedate = new Date ();
duedate.setDate(duedate.getDate() + 11);
let messagedate = new Date(duedate); 

let Interval = setInterval(updateCountdown, 1000)

function updateCountdown() {
   let now = new Date().getTime();
   let distance = duedate - now

   if (distance <= 0) { +
        duedate.setDate(duedate.getDate() + 11);
        messagedate.setDate(messagedate.getDate() + 11);

        clearInterval(Interval);
        Interval = setInterval(updateCountdown, 1000);

   }

let DAYS = Math.floor(distance / (1000 * 60 * 60 * 24));
let HOURS = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let MINUTES = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); 
let SECONDS = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("pdays").innerHTML = DAYS ;
document.getElementById("phours").innerHTML = HOURS ;
document.getElementById("pminutes").innerHTML = MINUTES ;
document.getElementById("pseconds").innerHTML = SECONDS ;
  }


    
    