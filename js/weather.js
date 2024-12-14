const API_KEY = "9a4e4be0c88d7ac25511279c85cce0d8";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temperature = document.querySelector("#temperature");
      const weatherIcon = document.createElement("img");
      weatherIcon.id = "weather-icon";
      weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      document.querySelector("#weather div").before(weatherIcon);
      temperature.innerText = `${parseInt(data.main.temp)}°C`;
      const city = document.querySelector("#city");
      city.innerText = data.name;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
