const apiKey = "14d2ba0ecc17adc0a805995d94c21546" ;
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")
async function getWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    if (response.status == 404){
        document.querySelector(".err").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        let info = await response.json();
        //console.log(info);
        document.querySelector(".city").innerHTML = info.name;
        document.querySelector(".temperature").innerHTML = Math.round(info.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = info.main.humidity + "%";
        document.querySelector(".wind").innerHTML = info.wind.speed + "km/hr";
    
        if(info.weather[0].main == "Clouds"){
            weatherIcon.src = "clouds.png";
        } else if (info.weather[0].main == "Clear"){
            weatherIcon.src = "clear.png";
        } else if (info.weather[0].main == "Rain"){
            weatherIcon.src = "rain.png";
        } else if(info.weather[0].main == "Drizzle"){
            weatherIcon.src = "drizzle.png";
        } else if(info.weather[0].main == "Mist"){
            weatherIcon.src = "mist.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".err").style.display = "none";
    }
}
searchBtn.addEventListener("click", ()=>{
    getWeather(searchBox.value);
})
