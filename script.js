const apikey="3bf17cc10a051aa65bcdacf3fda7b509";
const apiUrl = `https://api.openweatherapi.org/data/2.5/weather?appid=bf17cc10a051aa65bcdacf3fda7b509&q=`;
document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('searchBtn');
    const cityInput = document.getElementById('cityInput');
    const weatherInfo = document.getElementById('weatherInfo');

    searchBtn.addEventListener('click', () => {
        const cityName = cityInput.value.toLowerCase();

        const cities = {
            'peshawar': 'Peshawar',
            'nowshera': 'Nowshera',
            'islamabad': 'Islamabad',
            'karachi': 'Karachi',
            'lahore': 'Lahore'
        };

        if (cities.hasOwnProperty(cityName)) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=Peshawar&units=metric&appid=3bf17cc10a051aa65bcdacf3fda7b509`)
                .then(response => response.json())
                .then(data => {
                    const { main, weather, wind } = data;

                    weatherInfo.innerHTML = `
                        <div class="weather-card">
                            <h2 class="city-name">${cities[cityName]}</h2>
                            <div class="weather-icon">${getEmoji(weather[0].description)}</div>
                            <h3 class="temp">${main.temp}°C</h3>
                            <p class="desc">${weather[0].description}</p>
                            <div class="details">
                                <p>Humidity: <span class="humidity">${main.humidity}</span>%</p>
                                <p>Wind Speed: <span class="wind-speed">${wind.speed}</span> m/s</p>
                                <p>Pressure: <span class="pressure">${main.pressure}</span> hPa</p>
                            </div>
                        </div>
                    `;
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    weatherInfo.innerHTML = `<p class="text-danger text-center">Error fetching weather data</p>`;
                });  
        } else {
            weatherInfo.innerHTML = `<p class="text-danger text-center">City not found</p>`;
        }
    });

    function getEmoji(description) {
        const emojis = {
            'clear sky': '☀️',
            'few clouds': '🌤️',
            'scattered clouds': '🌥️',
            'broken clouds': '☁️',
            'shower rain': '🌦️',
            'rain': '🌧️',
            'thunderstorm': '⛈️',
            'snow': '❄️',
            'mist': '🌫️'
        };

        return emojis[description.toLowerCase()] || '';
    }
});







