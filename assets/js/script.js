var cityInput = document.querySelector('#city-input');
var submitBtn = document.querySelector('#submit-button');
var mainContainer = document.querySelector('#main-container');
var dailyCastEl = document.querySelector('#todays-weather');
var extendedCastEl = document.querySelector('#extended-forecast');

var key = 'd8411cc2ed3031b8d65ba4d92c535bed';

function searchCityCast (city){
    var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + key + '&units=metric';
    fetch(apiUrl)
    .then(function (response) {
        if(response.ok){
            response.json()
        }
    })
};