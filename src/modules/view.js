const view = (() => {
    function setSearchResult(weatherData) {
        if (!weatherData) return;

        const searchResult = document.getElementById("searchResult");
        searchResult.classList.add("active");

        const cityName = document.getElementById("cityName");
        const temperature = document.getElementById("temperature");
        const feelsLike = document.getElementById("feelsLike");
        const humidity = document.getElementById("humidity");
        const wind = document.getElementById("wind");

        cityName.textContent = `${weatherData.cityName}`;
        temperature.textContent = `Current Temperature: ${weatherData.temperature}°F`;
        feelsLike.textContent = `Today's High: ${weatherData.tempMax}°F`;
        humidity.textContent = `Humidity is ${weatherData.humidity}%`;
        wind.textContent = `Wind: ${weatherData.windSpeed} miles per hour`;
    }

    return { setSearchResult };
})();

export default view;