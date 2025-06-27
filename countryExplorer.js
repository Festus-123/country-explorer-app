const apiURL = 'https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population';


const searchInput = document.getElementById('searchInput');
const regionSelect = document.getElementById('regionSelect');
const sortButton = document.getElementById('sortButton');
const countriesContainer = document.getElementById('countries');

let countriesData = [];

async function fetchCountries() {
    try{
        const jes = await fetch(apiURL)
        countriesData = await jes.json()
        displayCountries(countriesData)
    }
    catch(error){
        console.error("errorfetching countries data", error)
        countriesContainer.innerHTML = '<p>Error fetching data</p>';
    }
}

function displayCountries(countries){
    countriesContainer.innerHTML = countries.map(country => {
    const name = country.name.common;
    const capital = country.capital ? country.capital[0] : 'N/A';
    const region = country.region || 'N/A';
    const population = country.population.toLocaleString();
    const flag = country.flags.png;

    return `
        <div class="card">
        <img class="flag" src="${flag}" alt="Flag of ${name}" />
        <div class="country-name">${name}</div>
        <div class="info"><strong>Capital:</strong> ${capital}</div>
        <div class="info"><strong>Region:</strong> ${region}</div>
        <div class="info population"><strong>Population:</strong> ${population}</div>
        </div>
    `;
}).join("")}

function filterCountries() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedRegion = regionSelect.value;
        const filtered = countriesData.filter(country => {
        const name = country.name.common.toLowerCase();
        const region = country.region;

        const matchesName = name.includes(searchTerm);
        const matchesRegion = selectedRegion ? region === selectedRegion : true;

        return matchesName && matchesRegion ;
    });
    displayCountries(filtered);
};

searchInput.addEventListener('input', filterCountries);
regionSelect.addEventListener('change', filterCountries);

fetchCountries();

sortButton.onclick = function(){
    regionSelect.value = "All Regions"
    fetchCountries();
}
