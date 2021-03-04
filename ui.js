class UI {
  constructor() {
    this.Country = document.getElementById('w-location');
    this.degre = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.localTime = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.Country.textContent = weather.location.country + '/' + weather.location.name ;
    this.degre.textContent = weather.current.temp_f + '°F ' + '(' +weather.current.temp_c + '°C' + ')';
    this.string.textContent = weather.current.condition.text;
    this.icon.setAttribute('src', weather.current.condition.icon);
    this.humidity.textContent = `Relative Humidity: ${weather.current.humidity}`;
    this.feelsLike.textContent = `Feels Like: ${weather.current.feelslike_c} °C`;
    this.wind.textContent = `Wind: ${weather.current.wind_kph} kph`;
  }
}