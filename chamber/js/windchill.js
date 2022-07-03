// //use the wind chill function 
// let speed = 30;
// let temp = 72;
// builtWC(speed, temp);



// function builtWC(speed, temp){
//     //compute the windchill
//     let wc = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));

//     //round answer down to nearest whole number
//     wc = Math.floor(wc);

//     //if chill is greater than temp, just return the temp
//     wc = (wc > temp) ? temp : wc;

//     //display the windchill
//     if (speed > 3 && temp < 50)
//         feelTemp.innerHTML = "Feels like: " + wc + "º";
//     else
//     feelTemp.innerHTML = "No wind chill";
// }

// select HTML elements to edit
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector('#wind-speed');
const windChill = document.querySelector('#feels-like');


//API URL with arguments  
// id for fairbanks alaska is 5861897
const url = 'https://api.openweathermap.org/data/2.5/weather?id=5861897&appid=d10750740ac29f4c233177823a633962';


fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let k = data.main.temp;
    f = ((k-273.15) * (9/5) + 32).toFixed(0);
    currentTemp.textContent = f;
    // currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(0)}</strong>`

    // wind chill
    // windSpeed.innerHTML = `<strong>${data.wind.speed.toFixed(0)}</strong>`;
    let w = data.wind.speed.toFixed(0);
    windSpeed.textContent = w;



    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;

    // weather icon
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

    // wind chill
    builtWC(w, f);
  });

   function builtWC(w, f){
     //compute the windchill
     let wc = 35.74 + (0.6215 * f) - (35.75 * Math.pow(w, 0.16)) + (0.4275 * f * Math.pow(w, 0.16));

     //round answer down to nearest whole number
     wc = Math.floor(wc);

     //if chill is greater than temp, just return the temp
     wc = (wc > f) ? f : wc;

     //display the windchill
     if (w > 3 && f < 50)
        windChill.innerHTML = "Feels like: " + wc + "º";
     else
     windChill.innerHTML = "No wind chill";
    };