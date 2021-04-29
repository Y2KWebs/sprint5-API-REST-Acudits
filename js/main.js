async function getAcudit() {
  await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("acudit").innerHTML = data.joke;
    });
}

async function getTiempo() {
  let str = "";
  await fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=barcelona&appid=6c35df700d93402106941f4d54f5a5a1"
  )
    .then((response) => response.json())
    .then((data) => {
      str += `Temperatura: ${data.main.temp} - `;
      str += `Mínima: ${data.main.temp_min} - `;
      str += `Máxima: ${data.main.temp_max} - `;
      str += `Humedad: ${data.main.humidity}`;
    });

  document.getElementById("tiempo").innerHTML = str;
}

getTiempo();

