//Init Classes
const ui = new UI;
const storage = new str;

//get what is in the local storage
const LSCountry = storage.getCountry();

const weather = new Weather(LSCountry.country);


//DOM Event
document.addEventListener('DOMContentLoaded', getWeather);

//Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const newCountry = document.getElementById('country').value;

  weather.changeLocation(newCountry);
  storage.setCountry(newCountry);

  getWeather();

  $('#locModal').modal('hide');

});

function getWeather(){
  weather.weatherToday()
    .then( (result) => {
      ui.paint(result)  
    }).catch( err => console.log(err) )
}