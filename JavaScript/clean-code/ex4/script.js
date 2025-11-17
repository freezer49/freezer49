// Fais du refactoring dans ce projet, surtout dans la partie Javascript qui contient beaucoup de code redondant pour la récupération de la météo associée à chaque ville.

// Liste des villes leurs latitudes et longitudes

const cities = [
  { name: "paris", lat: 48.8566, lon: 2.3522 },
  { name: "lyon", lat: 45.75, lon: 4.85 },
  { name: "nantes", lat: 47.2173, lon: -1.5534 },
  { name: "marseille", lat: 43.3, lon: 5.4 },
  { name: "lille", lat: 50.633333, lon: 3.066667 },
];

// Fonction pour récupèrer la météo d'une ville

const fetchWeatherForCity = async (city) => {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current=temperature_2m,rain`
  );
  const data = await response.json();
  return data.current;
};

// Fonction asynchrone qui récupère et affiche la météo de toutes les villes

const fetchWeather = async () => {
  for (const city of cities) {
    const weather = await fetchWeatherForCity(city);
    console.log(weather.rain);
    document.getElementById(`pluie_${city.name}`).innerHTML =
      "<strong>" + weather.rain + "</strong>";
    document.getElementById(`degres_${city.name}`).innerHTML =
      "<strong>" + weather.temperature_2m + "</strong>";
  }
};

// Appel de la fonction pour récupérer et afficher les données météo

fetchWeather();
