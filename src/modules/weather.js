const weather = (() => {
    function convertData(data) {
        const {
            name: cityName,
            main: { temp: temperature, temp_max: tempMax, humidity },
            wind: { speed: windSpeed },
        } = data;
            return { cityName, temperature, tempMax, humidity, windSpeed };
    }

    async function getData(city) {
        const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=9d0a4ea4b78acb7dd9fbdeb13a35fdfa`;
    
        try {
            const response = await fetch(endpoint, { mode: "cors" });
            if (!response.ok) throw new Error(`${city} not found. Please try again`);
            const data = convertData(await response.json());
            return data;
        } catch (error) {
            // eslint-disable-next-line no-alert
            alert(error);
            return null;
        }
    }
    return { getData };
})();

export default weather;