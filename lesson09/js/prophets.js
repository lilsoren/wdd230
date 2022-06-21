// store the URL of the JSON file into a const variable
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

// basic fetch() and feed it requiered argument 
//  the .then() returns a Promise 
// the seconds .then() is setup for us to work with the converted responce data in javascript object format 

function creatnth(order){
    let suffix = '';
    if (order == 1) 
    suffix = 'st';

    else if (order == 2)
    suffix = 'nd';
    
    else if (order == 3)
    suffix = 'rd';

    else
    suffix = 'th';

    return `${order}${suffix}`;
}

fetch(requestURL)

    .then(function (response) {
        return response.json();
    })

    .then(function (jsonObject) {

        // store the results of the converted response into an array 
        const prophets = jsonObject['prophets'];

        // loop through every record and process each one into its own 'card' (HTML output)in a function named "displayProphets"
        prophets.forEach(displayProphets);
        
    });


function displayProphets(prophet) {
    // create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');

    // change the text content property of the h2 element to contain the prophets full name
    h2.textContent = prophet.name + ' ' + prophet.lastname;

    // build the image attributes bu using the set attribute method for the src, allt, and loading attribute values
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${creatnth(prophet.order)} Latter-day President`);
    portrait.setAttribute('loading', 'lazy');

    // append the seciton with the h2 element 
    card.appendChild(h2);
    card.appendChild(portrait);

    // append the existing HTML div with the cards class with the section
    document.querySelector('div.cards').appendChild(card);
}

