// store the URL of the JSON file into a const variable
const requestURL = 'json/data.json';
const cards = document.querySelector('.cards');

// basic fetch() and feed it requiered argument 
//  the .then() returns a Promise 
// the seconds .then() is setup for us to work with the converted responce data in javascript object format 



fetch(requestURL)

    .then(function (response) {
        return response.json();
    })

    .then(function (jsonObject) {

        // store the results of the converted response into an array 
        const companies = jsonObject['cards'];

        // loop through every record and process each one into its own 'card' (HTML output)in a function named "displayProphets"
        companies.forEach(displayCompanies);
        
    });


function displayCompanies(company) {
    // create elements to add to the document
    let card = document.createElement('section');
    let h3 = document.createElement('h3');
    let portrait = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    
    

    // change the text content property of the h2 element to contain the prophets full name
    h3.textContent = `${company.name}`;

    // build the image attributes bu using the set attribute method for the src, allt, and loading attribute values
    portrait.setAttribute('src', company.imageurl);
    portrait.setAttribute('alt', `Company image of ${company.name}`);
    portrait.setAttribute('loading', 'lazy');

    // chamge the text content of property of the h1 element to contain the prophet info
    p1.textContent = `Address: ${company.address}`;
    p1.classList.add("address");
    p2.textContent = `Phone: ${company.phone}`;
    p2.classList.add("phone");
    p3.textContent = `Website: ${company.website}`;
    p4.textContent = `Membership: ${company.membership}`;



    // append the seciton with the h2 element 
    card.appendChild(h3);
    card.appendChild(portrait);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);
    

    // append the existing HTML div with the cards class with the section
    document.querySelector('section.cards').appendChild(card);
}

// display cards as grid and list
const gridbutton = document.querySelector("#grid-button");
const listbutton = document.querySelector("#list-button");
const display = document.querySelector(".cards");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("cardsgrid");
	display.classList.remove("cardslist");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("cardslist");
	display.classList.remove("cardsgrid");
}

