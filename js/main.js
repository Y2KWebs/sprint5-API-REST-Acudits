async function getAcudit() {
  const apiUrl =
    Math.random() <= 0.5
      ? "https://icanhazdadjoke.com/"
      : "https://api.icndb.com/jokes/random";

  await fetch(apiUrl, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      apiUrl;
      document.getElementById("acudit").innerHTML =
        data.joke || data.value.joke;
    });
}

async function getTiempo() {
  let str = "";
  await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=barcelona&units=metric&appid=6c35df700d93402106941f4d54f5a5a1"
  )
    .then((response) => response.json())
    .then((data) => {
      str = `Avui a Barcelona: Temp: ${data.main.temp}° - Mínima: ${data.main.temp_min}° - Máxima: ${data.main.temp_max}° - Humedad: ${data.main.humidity} <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png"></img>`;
    });

  document.getElementById("tiempo").innerHTML = str;
}

getTiempo();
