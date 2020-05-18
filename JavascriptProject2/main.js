let countries = [
    {
        "name" : "Canada",
        "continent" : "North America",
        "cities" : ["Calgary", "Montreal", "Toronto"], 
        "photos" : ["images/city1.jpg", "images/city2.jpg", "images/city3.jpg"]       
    },    
    {
        "name" : "United States",
        "continent" : "North America",
        "cities" : ["Boston", "Chicago", "New York", "Seatle", "Washington"],        
        "photos" : ["images/city4.jpg", "images/city5.jpg"] 
    },
    {
        "name" : "Italy",
        "continent" : "Europe",
        "cities" : ["Florence", "Milan", "Naples", "Rome"],    
        "photos" : [
            "images/city6.jpg", "images/city7.jpg", "images/city8.jpg",
            "images/city9.jpg", "images/city10.jpg", "images/city11.jpg"
        ]     
    },
    {
        "name" : "Spain",
        "continent" : "Europe",
        "cities" : ["Almeria", "Barcelona", "Madrid"],   
        "photos" : ["images/city12.jpg", "images/city13.jpg"]      
    },
]

let containerStart = "<div id='container'>";
let countryBoxStart = "<div class='countryBox'>"

let nameStart = "<div class='name'>";
let continentStart = "<div class='continent'>";

let citiesStart = "<div class='cities'>";
let photosStart = "<div class='photos'>";

let cityStart = "<div class='city'>";
let cityHeader = "<div id='cityHeader'>Cities</div>";

let photoHeader = "<div id='photoHeader'>Popular Photos</div>";
let photoBox = "<div id='photoBox'>";

let imgStart = "<img src=";
let imgEnd = ">";

let visitButton = "<button class='visitButton'>Visit</button>";

let divEnd = "</div>";

document.write(containerStart);

outputCities = (cities) => {
    for (let city in cities) {
        document.write(cityStart);
        document.write(cities[city]);
        document.write(divEnd);
    }
}

outputPhotos = (photos) => {
    for (let photo in photos) {        
        document.write(imgStart + photos[photo] + imgEnd);       
    }
}

outputNames = (name, countries, end) => {
    document.write(name);
    document.write(countries);
    document.write(end);
}

outputContinents = (continent, continents, end) => {
    document.write(continent);
    document.write(continents);
    document.write(end);
}

for(let property in countries) {
    
    document.write(countryBoxStart);

    //names section
    outputNames(nameStart, countries[property].name, divEnd);

    //continent section
    outputContinents(continentStart, countries[property].continent, divEnd);

    //cities section
    document.write(citiesStart);
    document.write(cityHeader);

    outputCities(countries[property].cities);

    document.write(divEnd);

    //photos section
    document.write(photosStart);
    document.write(photoHeader);

    document.write(photoBox);
    outputPhotos(countries[property].photos);
    document.write(divEnd);

    document.write(divEnd);

    //button section
    document.write(visitButton);
    document.write(divEnd);
}
