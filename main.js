"use strict";


// returning html with that table item
function renderCoffee(coffee) {
    var html = '<div class="coffee col">';
    html += '<i class="fas fa-coffee float-left mr-1"></i><div class="m-0 d-flex align-items-baseline"><div class="float-left"><h4 class="m-0">' + coffee.name + '</h4></div><div><p class="pl-1 text-secondary">' + coffee.roast +'</p></div></div>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}


function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
        if (selectedRoast === 'all') {
            filteredCoffees.push(coffee)
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

var coffeeSearch = document.querySelector("#coffee-search");

coffeeSearch.addEventListener("keyup", searchCoffee) ;

function searchCoffee() {
    var coffeeInput = coffeeSearch.value;
    var filteredCoffees = [];

    coffees.forEach(function(coffee) {
        if (coffee.name.toLowerCase().includes(coffeeInput)) {
           filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

var newCoffee = document.querySelector('#new-coffee');
var roastAddition = document.querySelector('#roast-addition');
var newButton = document.querySelector('#new-submit');
newButton.addEventListener("click", addCoffee);

function addCoffee() {
    coffees.unshift({
        name: newCoffee.value,
        roast: roastAddition.value
    });
    tbody.innerHTML = renderCoffees(coffees)
}



// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

// shows whatever you select ex: roasts
submitButton.addEventListener('click', updateCoffees);

