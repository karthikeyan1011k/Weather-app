const options1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ff26004ceemsh82ff77d336d01fdp1b89bajsn2339b8c6b3d8',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeatherDelhi = (delhi) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi",
    options
  )
    .then((response) => response.json())
    .then((response) => {
    Document.getElementById("delhi-feels-like").innerHTML = response.cloud_pct;
    Document.getElementById("delhi-feels-like").innerHTML = response.feels_like;       
    Document.getElementById("delhi-humidity").innerHTML = response.humidity;
    Document.getElementById('delhi-max_temp').innerHTML = response.max_temp;
    Document.getElementById('delhi-min_temp').innerHTML = response.min_temp;
    Document.getElementById('delhi-sunrise').innerHTML = response.sunrise;
    Document.getElementById('delhi-sunset').innerHTML = response.sunset;
    Document.getElementById('delhi-temp').innerHTML = response.wind_degrees;
    Document.getElementById('delhi-wind_speed').innerHTML = response.wind_speed;
     

      console.log(response);
    }) 
    .catch((err) =>{ 
      alert("Server Busy Try After Some Time" +err);
      console.error(err)});
};