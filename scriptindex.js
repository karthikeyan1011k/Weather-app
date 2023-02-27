let cityName = document.getElementById("cityName");

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ff26004ceemsh82ff77d336d01fdp1b89bajsn2339b8c6b3d8',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};
const getWeather = (city) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      document.getElementById("cityName").innerHTML = city.toUpperCase();
      document.getElementById("temp").innerHTML = response.temp;
      document.getElementById("min_temp").innerHTML = response.min_temp;
      document.getElementById("max_temp").innerHTML = response.max_temp;
      document.getElementById("wind_speed").innerHTML = response.wind_speed;
      document.getElementById("wind1").innerHTML = response.wind_speed;
      document.getElementById("wind_degrees").innerHTML = response.wind_degrees;
      const unixTimestampSunrise = response.sunrise;
      const unixTimestampSunset = response.sunset;

      // Convert Unix timestamp to milliseconds
      const sunrise = new Date(unixTimestampSunrise * 1000);
      const sunset = new Date(unixTimestampSunset * 1000);

      // Format the date and time
      const formattedDateSunrise = sunrise.toLocaleTimeString();
      const sunsetTime = sunset.toLocaleTimeString();
      const formattedTimeSunset =
        document.getElementById("sunrise").innerHTML = formattedDateSunrise;
      document.getElementById("sunset").innerHTML = formattedTimeSunset;
      // date formate add date
      let today = new Date();
      let day = String(today.getDate()).padStart(2, "0");
      let month = String(today.getMonth() + 1).padStart(2, "0");
      let year = today.getFullYear();
      let dateString = `${day}-${month}-${year}`;
      document.getElementById("date").innerHTML = dateString;

      // create a image for day or night
      let now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();
      // create the required image for sun info 
      let time = `${hours}:${minutes}:${seconds}`;
      if (time >= "07:00:00" && time < "12:00:00") {
        document.getElementById("sun-img").src = "./images/morSun.jpg";
      } else if (time >= "12:00:00" && time < "16:00:00") {
        document.getElementById("sun-img").src = "./images/noonSun.jpg";
      } else if (time >= "16:00:00" && time < "18:10:00") {
        document.getElementById("sun-img").src = "./images/eveSun.jpg";
      } else {
        document.getElementById("sun-img").src = "./images/moon.jpg";
      }

      // create the required images for wind info 
      document.getElementById('wind-img').src = "./images/windy.jpg";

      // create the required images for Temperature 
      if (time <= '18:00:00' && time >= '06:30:00') {
        let temp = response.temp;
        if (temp < 10) {
          document.getElementById('temp-img').src = "./images/snowy.jpg";
        } else if (temp >= 11 && temp < 20) {
          document.getElementById('temp-img').src = "./images/stormy.jpg";
        } else if (temp >= 20 && temp < 25) {
          document.getElementById('temp-img').src = "./images/cloudy.jpg";
        } else {
          document.getElementById('temp-img').src = "./images/sunny.jpg";
        }
      } else {
        document.getElementById('temp-img').src = "./images/moon.jpg";
      }
      console.log(response);
    })
    .catch((err) => {
      alert("Server Busy Try After Some Time" + err);
      console.error(err)
    });
};

document.addEventListener("DOMContentLoaded", () => {
  let submit = document.getElementById("submit");
  submit.addEventListener("click", (event) => {
    event.preventDefault();
    let city = document.getElementById("searchbox").value.toUpperCase();
    console.log(city);
    getWeather(city);
  });
});


