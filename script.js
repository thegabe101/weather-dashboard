//draw time header element grabbers first 

const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//going to set an interval function to manage the clock and the date. not really sure but there must be a better way to do this. the problem here is that i dont need to check every second for a new date, but do want to do so re: time. 
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
//this is my api key for open weather; not sure if this remains good forever. also not sure whether there is some reason to not make an API key a const but it seems like a const would be the right choice. 
//this is a different way of implementing method+key. Learned from tutor. 
// const options = {
//     method: 'GET',
//     headers: {
//         APIKey: "e3c409c704302318c1005301babd9b7c"
//         }
// }

// $('#searchButton').on('click', fetchWeather());

var APIKey = "e3c409c704302318c1005301babd9b7c"

//friend showed me trick for turning units to imperial.
function fetchWeather() {
    var cityText = document.getElementById('input').value;
    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='+ cityText + '&appid=' + APIKey + '&units=imperial';
    var citySearch = $('input').val();
    console.log(citySearch);
    
//not going to have time to get local storage working due to class project. will return later. 
localStorage.setItem("input", citySearch);

fetch(requestUrl) 
    .then( function (response) {
        if (!response.ok) {
    console.log("error")
        } else {
    return response.json()
  }
})

.then(function (data) {
    console.log(data)
    cityName.textContent = data.name;


    //could almost get the icons working but struggling to figure out the URL. I am not sure how to target the icons in a correct loop or function or I am grabbing the incorrect part of the array. This is something I would like to get working later but won't have time for before turning this in. 
    // var iconCode = data.list.weather[0].icon;
    // var iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";
    // $('#wicon').attr('src', iconURL);

    //this is a loop that can grab the forecast elements and write them into the weather panels 
    for(i = 0; i<5; i++){
        document.getElementById("min" + (i+1)).innerHTML = "Min: " + Number(data.list[i].main.temp_min).toFixed(1)+ "??";
        document.getElementById("wind" + (i+1)).innerHTML = "Wind: " + Number(data.list[i].wind.deg).toFixed(1)+ " " + "degrees";
        document.getElementById("gust" + (i+1)).innerHTML = "Gust: " + Number(data.list[i].wind.gust).toFixed(1)+ " " + "gust" + "speed";
        // document.getElementById("humidity" + (i+1)).innerHTML = "Humidity: " + Number(data.list[i].main.humidity) + " " + "humidity" + "level";
    }

    for(i = 0; i<5; i++){
        document.getElementById("max" + (i+1)).innerHTML = "Max: " + Number(data.list[i].main.temp_max).toFixed(2) + "??";
        document.getElementById("wind" + (i+1)).innerHTML = "Wind: " + Number(data.list[i].wind.deg).toFixed(1)+ " " + "degrees";
        document.getElementById("gust" + (i+1)).innerHTML = "Gust: " + Number(data.list[i].wind.gust).toFixed(1)+ " " + "gust" + "speed";
        // document.getElementById("humidity" + (i+1)).innerHTML = "Humidity: " + Number(data.list[i].main.humidity) + " " + "humidity" + "level";
    }
})

//this is a trick I learned from a friend. Can use .catch if the script fails above (i.e. no city name) to prompt user for correct parameters. 
.catch(err => alert("Please enter a valid city name to receive weather data."))
}

//function to label days correctly
var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

function whatDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekday[whatDay(i)];
    }

// ========================================================================== original sketchboard but abandoned quickly

//not sure how to create this list functionally. wanted to work on this with tutor but session was canceled. something to note to work on in future.
    // function listItem(city){
    //     var listEl= document.createElement('<li>')+city.toUpperCase()+("</li>");
    //     $(listEl).attr("class","prevList-item");
    //     $(listEl).attr("data-value",city.toUpperCase());
    //     $(".prevList").append(listEl);
    // }




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

// 
