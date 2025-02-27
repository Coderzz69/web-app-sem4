document.getElementById('weatherForm')!.addEventListener('submit', function(event: Event) {
    event.preventDefault();
    const city = (document.getElementById('city') as HTMLInputElement).value;
    getWeather(city);
});

async function getWeather(city: string): Promise<void> {
    const apiKey = '7e6198165191ee7328fded73a3e418e1';
    const url = buildWeatherUrl(city, apiKey);

    try {
        const data = await fetchWeatherData(url);
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function buildWeatherUrl(city: string, apiKey: string): string {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
}

async function fetchWeatherData(url: string): Promise<any> {
    const response = await fetch(url);
    return await response.json();
}

function displayWeather(data: any): void {
    const weatherResult = document.getElementById('weatherResult')!;
    if (data.cod === 200) {
        weatherResult.innerHTML = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    } else {
        weatherResult.innerHTML = `<p>${data.message}</p>`;
    }
}
