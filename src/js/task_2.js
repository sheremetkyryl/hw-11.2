const weather = {
    temperature: parseInt(prompt("Введіть температуру")),
    humidity: 60,
    windSpeed: 15,
    isWeather() {
        return this.temperature < 0;
    }
}

if (weather.isWeather()) {
    alert(`Температура нижче 0`)
} else {
    alert(`Температура вище 0`);
}