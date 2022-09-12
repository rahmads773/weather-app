let weather = {
    "apiKey":"df12e9b854fd343f972ce63525641d47",
    "fetchWeather": (city) => { 
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city 
        + "&units=metric&appid=" 
        + weather.apiKey
        )
        .then((response) => response.json() 
        ).then((data) => weather.displayWeather(data))
     },
     "displayWeather": (data) => { 
const {name} = data
const {icon,description} = data.weather[0];
const {temp,humidity} = data.main
const {speed} = data.wind
document.querySelector(".city").textContent = `Weather in ${name}`
document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}.png`
document.querySelector(".description").textContent = description
document.querySelector(".temp").textContent = `${temp}°C`
document.querySelector(".Humidity").textContent = `Humidity: ${humidity}%`
document.querySelector(".wind").textContent = `Wind Speed: ${speed} Km/h`
document.body.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?${name}")`
document.querySelector(".weather").classList.remove("loading")
      },
      "search": () => { 
        weather.fetchWeather(document.querySelector(".search .search-bar").value)
        document.querySelector(".search .search-bar").value = ""
       }
}
document.querySelector(".search button").addEventListener("click",() => { 
    weather.search()
 })
document.querySelector(".search .search-bar").addEventListener("keyup",(eo) => { 
    if(eo.key === "Enter"){
        weather.search()
    }
 }) 

weather.fetchWeather("Annaba")
