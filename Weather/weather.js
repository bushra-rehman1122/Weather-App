const weather_img = document.getElementById("weather-img");
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const temp = document.querySelector(".temp");
const description = document.querySelector(".description");
const percentage = document.getElementById("percentage");
const km = document.getElementById("km");
const image_not_found = document.querySelector(".image-not-found");
const weather = document.querySelector(".weather");
async function checkWeather(city) {
    const api_key = "abed8479b63ad68c63b8ea57562bf4c6";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;//we use this arrow quotes because we created some changes in the  following link
    const weather_data = await fetch(`${url}`).then(response => response.json());
    if (weather_data.cod === `404`) {
             image_not_found.style.display = "flex";
             weather.style.display = "none";
             console.log("error");
             return;

    }
     image_not_found.style.display = "none";
             weather.style.display = "flex";
     temp.innerHTML= `${Math.round(weather_data.main.temp-273.15)}°C`;//we write the inner.HTML bcz we want when the search btn clicked so the value changes according to the searched city.. 
     description.innerHTML =` ${weather_data.weather[0].description}`;
     percentage.innerHTML = `${weather_data.main.humidity}%`;
     km.innerHTML = `${weather_data.wind.speed}Km/H`;
     switch (weather_data.weather[0].main
     ) {
        // case 'Clouds':
        //     weather_img.src = "/images/clouds.png";
        //     break;
        case 'Wind':
            weather_img.src = "/images/wind.png";
            break;
        case 'Rain':
            weather_img.src ="/Weather/weather-images/rain.png";
            break;
            case 'Mist':
            weather_img.src = "Weather/weather-images/mist.png";
            break;
            // case 'Drizzle':
            // weather_img.src ="/images/drizzle.png";
            // break;
             case 'Clear':
            weather_img.src = "/Weather/weather-images/clear.png";
            break;
            case 'Snow':
            weather_img.src = "/Weather/weather-images/snow.png";
            break;
             case 'Haze':
            weather_img.src = "/Weather/weather-images/haze.png";
            break;
             case 'Clouds':
            weather_img.src = "/Weather/weather-images/overcast cloud.png";
            break;
     }
    console.log(weather_data);//"Wait for the API to respond, then convert the response to JSON format."
}


btn.addEventListener('click',()=>{
     checkWeather(input.value);
})//Yani jab user button (btn) par click karta hai, toh checkWeather() function chalaya jata hai, aur usme input.value (matlab user ne jo city name type kiya hai) pass kiya jata hai.
//You also have to take care of that you can also place or write any other name in place of (checkWeather) but make sure that you keep the exact same name in line 8 after function ...likhe the word on line 18 and 8 should be same
