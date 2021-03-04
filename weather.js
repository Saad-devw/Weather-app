class Weather {
  constructor (country) {
    this.client_key = 'e68bfbc4c6754403994193346211201';
    this.country = country;
  
  }

  async weatherToday(weather){
    const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.client_key}&q=${this.country}`);

    const responseData = await res.json();

    return responseData;
  }
  changeLocation(Location){
    this.country = Location;
  }
}