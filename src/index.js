function updateWorldClock() {
    //Los Angeles
    let losAngelesElement = document.getElementById('los-angeles');
    if (losAngelesElement){
        let losAngelesDateElement = losAngelesElement.querySelector('.date');
        let losAngelesTimeElement = losAngelesElement.querySelector('.time');
        let losAngelesTime = moment().tz('America/Los_Angeles');
        losAngelesDateElement.innerHTML = losAngelesTime.format('MMMM Do YYYY');
        losAngelesTimeElement.innerHTML = losAngelesTime.format('h:mm:ss [<small>]A[</small>]');
    }

    // Paris
    let parisElement = document.getElementById('paris');
    if (parisElement) {
        let parisDateElement = parisElement.querySelector('.date');
        let parisTimeElement = parisElement.querySelector('.time');
        let parisTime = moment().tz('Europe/Paris');
        parisDateElement.innerHTML = parisTime.format('MMMM Do YYYY');
        parisTimeElement.innerHTML = parisTime.format('h:mm:ss [<small>]A[</small>]');
    }
    
    // Auckland
    let aucklandElement = document.getElementById('auckland');
    if (aucklandElement) {
        let aucklandDateElement = aucklandElement.querySelector('.date');
        let aucklandTimeElement = aucklandElement.querySelector('.time');
        let aucklandTime = moment().tz('Pacific/Auckland');
        aucklandDateElement.innerHTML = aucklandTime.format('MMMM Do YYYY');
        aucklandTimeElement.innerHTML = aucklandTime.format('h:mm:ss [<small>]A[</small>]');
    }
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === 'current') {
        cityTimeZone = moment.tz.guess();
    };
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityDate = moment().tz(cityTimeZone);

    let citiesElement = document.getElementById('cities');

    citiesElement.innerHTML = `
    <div class="city">
        <div class="city-header">
            <h2>${cityName}</h2>
            <div class="date">${cityDate.format('MMMM Do YYYY')}</div>
        </div>
        <div class="city-time">
            <div class="time">${cityDate.format('h:mm:ss [<small>]A[</small>]')}</div>
        </div>
    </div>
    <a href="/"> Back to cities</a>
    `
    
};

updateWorldClock();
setInterval(updateWorldClock, 1000);

let citiesSelectElement = document.getElementById('timezone');
citiesSelectElement.addEventListener('change', updateCity);