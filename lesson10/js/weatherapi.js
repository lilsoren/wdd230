// select HTML elements to edit
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

//API URL with arguments  
const url = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=d10750740ac29f4c233177823a633962';

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // this is temporary for development only
  });