// Add JS here
const apiKey = "fffb7770e1c458764dc78d2a8cc7223a";
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1113814250.
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Suggested code may be subject to a license. Learn more: ~LicenseLog:214676791.
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&APPID=${apiKey}`);

    var data = await response.json();
   
    

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";

// Suggested code may be subject to a license. Learn more: ~LicenseLog:1593924010.
    
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    

if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "images/clouds.png";
}
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1329405556.
else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "images/clear.png";
}
else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "images/rain.png";
}
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1512443097.
else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "images/drizzle.png";
}
else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "images/mist.png";
}
else if(data.weather[0].main == "Snow"){
    weatherIcon.src = "images/snow.png";
}
else if(data.weather[0].main == "Haze"){
    weatherIcon.src = "images/haze.png";
}

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});


// searchBox.addEventListener("keypress", setQuery);




