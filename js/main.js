async function getAcudit() {
  const apiUrl =
    Math.random() <= 0.5
      ? "https://icanhazdadjoke.com/"
      : "http://api.icndb.com/jokes/random";

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
    "http://api.openweathermap.org/data/2.5/weather?q=barcelona&units=metric&appid=6c35df700d93402106941f4d54f5a5a1"
  )
    .then((response) => response.json())
    .then((data) => {
      str += `Temp: ${data.main.temp}° - `;
      str += `Mínima: ${data.main.temp_min}° - `;
      str += `Máxima: ${data.main.temp_max}° - `;
      str += `Humedad: ${data.main.humidity}`;
      str += `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png"></img>`;
    });

  document.getElementById("tiempo").innerHTML = "Avui a Barcelona: " + str;
}

getTiempo();
