// select HTML elements to edit
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

//API URL with arguments  
// id for fairbanks alaska is 5861897
const url = 'http://api.openweathermap.org/data/2.5/weather?id=5861897&appid=d10750740ac29f4c233177823a633962';


fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // this is temporary for development only
    let k = data.main.temp;
    f = ((k-273.15) * (9/5) + 32).toFixed(0);
    currentTemp.textContent = f;
    // currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(0)}</strong>`

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  });

