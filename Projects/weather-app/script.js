// Obtén una API Key de OpenWeatherMap y reemplaza 'YOUR_API_KEY' con tu propia clave.
const apiKey = '7bf048ccb62e78b4b1703afd571854a4';
const searchButton = document.getElementById('search-button');
const cityInput = document.getElementById('city-input');
const weatherInfo = document.getElementById('weather-info');

searchButton.addEventListener('click', () => {
  const city = cityInput.value;
  if (city !== '') {
    getCoordinates(city)
      .then(coordinates => {
        getWeather(coordinates.lat, coordinates.lon);
      })
      .catch(error => {
        console.log('Error:', error);
        weatherInfo.innerHTML = 'Ocurrió un error al obtener los datos del clima.';
      });
  }
});

function getCoordinates(city) {
  const apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;

  return fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al obtener las coordenadas.');
      }
      return response.json();
    })
    .then(data => {
      if (data.length > 0) {
        const { lat, lon } = data[0];
        return { lat, lon };
      } else {
        throw new Error('No se encontraron coordenadas para la ciudad especificada.');
      }
    });
}

function getWeather(lat, lon) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily&appid=${apiKey}&units=metric`;

  return fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al obtener los datos del clima.');
      }
      return response.json();
    })
    .then(data => {
      const { current } = data;
      const temperature = current.temp;
      const description = current.weather[0].description;

      weatherInfo.innerHTML = `
        <h2>Clima actual</h2>
        <p>Temperatura: ${temperature}°C</p>
        <p>Descripción: ${description}</p>
      `;
    })
    .catch(error => {
      console.log('Error:', error);
      weatherInfo.innerHTML = 'Ocurrió un error al obtener los datos del clima.';
    });
}