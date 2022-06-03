var cityInputEl = document.querySelector('#city-input');
var submitBtn = document.querySelector('#submit-button');
var mainContainer = document.querySelector('#main-container');
var dailyCastEl = document.querySelector('#todays-weather');
var extendedCastEl = document.querySelector('#extended-forecast');


var key = 'd8411cc2ed3031b8d65ba4d92c535bed';

submitBtn.addEventListener('click', searchCityCast);

function searchCityCast(event) {

    event.preventDefault();
  
    var search = cityInputEl.value.trim().toUpperCase();
    if (search) {
  
      searchCityCast(search);
      console.log(searchCityCast);

  
    } else {
  
      alert('Please enter a city');
    }
  };


var searchCityCast = function (city) {
    var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + key + '&units=metric';
    fetch(apiUrl)
    .then(function (response) {
        if(response.ok){
            response.json();
            console.log(response);
        }
        else{
            alert('Error: ' + response.statusText);
        }
    })
    .catch(function (error) {
        alert('No Connection to API Reached')
    })
};


//diplay City, Current Date and Weather on mainContainer

