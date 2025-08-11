function updateWorldClock() {
    //Los Angeles
    let losAngelesElement = document.getElementById('los-angeles');
    let losAngelesDateElement = losAngelesElement.querySelector('.date');
    let losAngelesTimeElement = losAngelesElement.querySelector('.time');
    losAngelesDateElement.innerHTML = moment().format('MMMM Do YYYY');
    losAngelesTimeElement.innerHTML = moment.tz('America/Los_Angeles').format('h:mm:ss [<small>]A[</small>]');

    // London
    let londonElement = document.getElementById('london');
    let londonDateElement = londonElement.querySelector('.date');
    let londonTimeElement = londonElement.querySelector('.time');
    londonDateElement.innerHTML = moment().format('MMMM Do YYYY');
    londonTimeElement.innerHTML = moment.tz('Europe/London').format('h:mm:ss [<small>]A[</small>]');
}

updateWorldClock(); // Initial call to set the time immediately
setInterval(updateWorldClock, 1000);