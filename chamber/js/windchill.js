//use the wind chill function 
let speed = 30;
let temp = 72;
builtWC(speed, temp);



function builtWC(speed, temp){
    //compute the windchill
    let wc = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));

    //round answer down to nearest whole number
    wc = Math.floor(wc);

    //if chill is greater than temp, just return the temp
    wc = (wc > temp) ? temp : wc;

    //display the windchill
    if (speed > 3 && temp < 50)
        feelTemp.innerHTML = "Feels like: " + wc + "º";
    else
    feelTemp.innerHTML = "No wind chill";
}