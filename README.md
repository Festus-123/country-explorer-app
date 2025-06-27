
**---**

**Country Explorer App**

Country Explorer is a simple and interactive web application that displays essential information about countries using the REST Countries API. Users can explore countries and view their capital, region, population, and flags.

![image](https://github.com/user-attachments/assets/313a0a51-861c-4b8c-b85a-67e0b001f017)


**Features**

Fetches country data dynamically from an external API

Displays country name, capital, region, population, and flag

Responsive and styled user interface

Organized layout for easy navigation


**Technologies Used**

**HTML**

**CSS**

**JavaScript**


**REST API ([https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population)](https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population)
**

**Project Structure**

INVENTORS/
├── country xplorer.html
├── countryExplorer.cs
├── countryExplorer.js
└── .vscode/
└── settings.json

**API Used**

URL:[ https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population](https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population)

This API returns a list of all countries with the specified fields:

name.common – The common name of the country

capital – The capital city

region – The region (e.g., Europe, Asia)

population – The number of people living in the country

flags.png – URL of the flag image


**How It Works**

1. On page load, the JavaScript fetches data from the REST Countries API.


2. It processes the data and dynamically creates HTML elements for each country.


3. The data is displayed in a clean and styled format using CSS.



**Setup Instructions**

**1. Clone this repository**

git clone https://github.com/Festus-123/country-explorer-app.git


**2. Navigate to the folder**

cd INVENTORS


**3. Open index.html in a browser**

Just double-click country xplorer.html or use Live Server in VS Code



**Future Improvements**

Add search functionality

Add region or population-based filters

Enable dark/light theme toggle

Improve responsive layout and interactivity to get more data on country when clicked


**Author**

Festus PHILLIP — and guidiance from mentors

**License**

This project is open-source and free to use.


**---**
