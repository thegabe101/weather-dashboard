# weather-dashboard

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#Usage)
- [Bugs](#Bugs)
- [Screenshots](#screenshots)
- [Credits](#credits)

## Description

This project involved creating a weather dashboard that could display a 5-day forecast for a user-input city as well as a current forecast and local storage features. This project was not completed; many features are missing due to time constraints and a high learning curve for server-side API's (at least for this learning developer).

- The motivation for creating this project was continuing to develop vanilla JavaScript skills while mixing in JQuery, Bootstrap, and moment.JS APIs while mixing in newly learned skills in server-side APIs through the OpenWeather platform.
- This was a project built from scratch in order to display weather. There were several different challenging aspects of this project: the skeleton was complex, the styling was important as many elements were being introduced by script, and the script involved skills only learned a matter of days before. The original idea of the project was to display a current weather forecast for an input city + a 5-day forecast, but only 5-day forecast elements were implemented. Construction of the current weather forecast uses a separate API call and makes sense conceptually; this will be added at a later date in project appension.
- This is a useful project in that it creates a page that users can track real-world essential information with. Currently, a user can input nearly any city in the world and get 5-day forecast data for minimum and maximum temperatures and wind speed + gust. Further data should be implemented in order to improve user experience as well as page aesthetic; icons are not currently implemented properly and a placeholder weather image takes their space.
- This was the most challenging project yet, regardless of time constraint. The good news is much was learned about implementing server-side APIs and fetching data arrays + implementing them. The bad news was hitting numerous walls in terms of actually displaying the data. Local storage continues to be a struggle and, in turn, displaying dynamic lists in which to record stored items. These are all things to come back to once the first class project is over and time is a bit more ample.

## Installation

- There is no specialized installation of third-party programs or data required to use this webpage. All functionality is built into the page itself via JavaScript, which fetches data from the OpenWeather API in order to record JSON objects that provide the code with data with which to fill the page.

## Usage

- Using this website is fairly straightforward. Once the page is loaded a user may input a city in the input box and fetch weather data.

## Bugs

- This page is not fully-functioning and numerous bugs are present:

- Weather icons fetched from OpenWeather do not display properly. A placeholder image is in their place.
- Data is not saved in local storage.
- No current weather is displayed.
- Panels are not aligned correctly.
- Humidity and UV data is not fetched or displayed.
- Time and date are interval based and do not load on page-load.

## Screenshots

- ![Alt= Screenshot showing landing page.](/screenshot1.jpg)
- ![Alt= Screenshot showing fetched 5-day forecast for Seattle.](/screenshot2.jpg)

## Credits

- This page could not have come together without the help of educators at UW FullStack Coding Bootcamp and the OpenWeather opensource API.
