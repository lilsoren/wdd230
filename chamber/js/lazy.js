
let imagesToLoad = document.querySelectorAll('img[data-src]');

//parameters being set for the intersectional observer
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onLoad = () => {
        image.removeAttribute('data-src');
    };
};


if('IntersectionObserver' in window){
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting){
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);

    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
}

else{
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}


///////////////////
/* Local storage */
///////////////////

//initialize display elements
// const todayDisplay = document.querySelector(".today");
// const visitsDisplay = document.querySelector(".visits");


// console.log(todayDisplay, visitsDisplay, lastVisitedDisplay);
// // get teh stored value in local storage
// let numVisits = Number(window.localStorage.getItem("visits-ls"));

// // determine if this is the first visit or display the number of visits
// if (numVisits !== 0) {
// 	visitsDisplay.textContent = numVisits;
// }
// else{
// 	visitsDisplay.textContent = `This is your first visit!`;
// }

// //increment the number of visits
// numVisits++;

// // store the new number of visits value
// localStorage.setItem("visits-ls", numVisits);

// // show todays date
// todayDisplay.textContent = Date.now();

const lastVisitedDisplay = document.querySelector(".lastVisited");

const cookie1 = "lastTimeVisited";
const prevTime = getCookie(cookie1);
const curTime = new Date().getTime();
setCookie(cookie1, curTime, 365);

const milSecTimeDif = curTime - prevTime;
const secTimeDif = milSecTimeDif / 1000;
const minTimeDif = secTimeDif / 60;
const hourTimeDif = minTimeDif / 60;
const dayTimeDif = hourTimeDif / 24;


lastVisitedDisplay.textContent = setLastTimeVisited(dayTimeDif, hourTimeDif, minTimeDif, secTimeDif, !prevTime);

function setLastTimeVisited(dayTimeDif, hourTimeDif, minTimeDif, secTimeDif, firstTime){
    let duration = null;
    if (firstTime){
        return "Welcome! This is your first visit.";
    } 
    else if (dayTimeDif > 1){
        duration = Math.floor(dayTimeDif) + " day(s)";
    }
    else if (hourTimeDif > 1){
        duration = Math.floor(hourTimeDif) + " hour(s)";
    }
    else if (minTimeDif > 1){
        duration = Math.floor(minTimeDif) + " minute(s)";
    }
    else if (secTimeDif > 1){
        duration = Math.floor(secTimeDif) + " second(s)";
    }
        return "Welcome! It has been " + duration + " since your last visit.";
    
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }