
const apiKey = "1be8800ff79fee14db6cb46b802ad340";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = $(".search input");
const searchBtn = $(".search button");
var weathericon = $(".weather-icon");


async function checkweather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    if (response.status == 404){
        $(".error").css("display", "block");
        $(".weather").css("display", "none");
    } else{
        $(".error").css("display", "none");   
    }

    var data = await response.json();

    console.log(data);
    $(document).ready(function () {
        $(".city").text(data.name);
        $(".temp").text(Math.round(data.main.temp )+"°c");
        $(".humidity").text(data.main.humidity + "%");
        $(".wind").text(data.wind.speed + "km/h");


        if (data.weather[0].main == "Clouds") {
            $(weathericon).attr('src', './images/clouds.png');
        }
        else if (data.weather[0].main == "Clear") {
            $(weathericon).attr('src', './images/clear.png');
        }
        else if (data.weather[0].main == "Rain") {
            $(weathericon).attr('src', './images/rain.png');
        }
        else if (data.weather[0].main == "Drizzle") {
            $(weathericon).attr('src', "images/drizzle.png");
        }
        else if (data.weather[0].main == "Mist") {
            $(weathericon).attr('src', "images/mist.png");
        }

        $(".weather").css("display", "block");
    })
    
}

$(searchBtn).click(function(){
    checkweather(searchBox.val());
})