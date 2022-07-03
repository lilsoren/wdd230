function toggleMenu(){
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("hamburger").classList.toggle("open");
}

const x = document.getElementById('hamburger');
x.onclick = toggleMenu;


// Current date 
const datefield = document.querySelector(".date");
const meetingfield = document.querySelector(".meeting-notice");
 // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
//Come join us for the chamber meet and greet Wednesday at 7:00 p.m.

datefield.innerHTML = `<em>${fulldate}</em>`;
if (now.getDay() == 2 || now.getDay() == 3){
    datefield.innerHTML = `<em>${fulldate}</em>` + "<br/>Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
}

// Last modified and copyright
var lm = document.querySelector("#lastmod").textContent = document.lastModified;

var dt = new Date();
document.querySelector('#date').textContent=dt.getFullYear();
