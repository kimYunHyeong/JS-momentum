const API_KEY = "1a0b174feaa23a16d08e70649c670371";

function onGeoSuccess(positon) {
  const latitude = positon.coords.latitude;
  const longitude = positon.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weatherContainer = document.querySelector(
        "weather span:first-child"
      );
      const cityContainer = document.querySelector("weather span:last-child");
      weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      cityContainer.innerText = data.name;
    })
  );
}
function onGeoError() {
  alert("Can't Find You");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
