console.log('Made it')
function toggleMenu(){
    console.log('toggle works');
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("hamburger").classList.toggle("open");
}

const x = document.getElementById('hamburger');
console.log('x', x);
x.onclick = toggleMenu;


// Current date 
const datefield = document.querySelector(".date");
 // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;


// Last modified and copyright
var lm = document.querySelector("#lastmod").textContent = document.lastModified;

var dt = new Date();
document.querySelector('#date').textContent=dt.getFullYear();
console.log("this far");