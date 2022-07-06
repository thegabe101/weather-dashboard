const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


setInterval(() => {
    var time = new Date();
    var month = time.getMonth();
    var date = time.getDate();
    var day = time.getDay();
    var hour = time.getHours();
    var minute = time.getMinutes();

    timeEl.innerHTML = hour + ':' + minute;

    dateEl.innerHTML = days[day] + ', ' + date + ' ' + months[month];

}, 1000);


//next task is to declare weather variables and API Key

    

























// const timeEl = document.getElementById('time');
// const dateEl = document.getElementById('date');
// const weatherItems = document.getElementById('weatherItems');
// const timeZone = document.getElementById('time-zone');
// const yourCountry = document.getElementById('country');
// const weatherForecast = document.getElementById('weather-forecast');
// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


//experimental retrieval- successful. unsure how to incorporate into rest of project 
// retrieveWeather();
// function retrieveWeather () {
//     fetch ('https://api.openweathermap.org/data/2.5/weather?lat=47.608013&lon=-122.335167&units=metric&appid=2104664de283a1ec8c91d0762df90dad')
//         .then (function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data)
//             // displayWeather(data);
//         })
//     };

// displayWeather(data); {
//     let {humidity, sunrise, sunset, wind_speed, temp_max, temp_min,} = data.current;

// }
