const weather = (() => {
    function convertData(data) {
        const {
            name: cityName;
            main: { temp: temperature, feels_like: feelsLike, humidity },
            wind: { speed, windSpeed },
        } = data;
            return { cityName, temperature, feelsLike, humidity, windSpeed };
    }

    async function getData(city) {
        const endpoint = `https://api.openweathermap.org/data/2.5/weather?q={city name}&units=imperial&appid=9d0a4ea4b78acb7dd9fbdeb13a35fdfa`
    
        try {
            const response = await fetch(endpoint, { mode: "cors" });
            if (!response.ok) throw new Error(`${city} not found. Please try again`);
            const data = convertData(await response.json());
            return data;
        } catch (error) {
            alert(error);
            return null;
        }
    }
    return { getData };
})();

export default weather;