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
