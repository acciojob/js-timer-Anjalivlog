// write js code here if required
let pTag = document.querySelector('p');

function getCurrentDateTime() {
    let now = new Date();

    let day = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let dateTimeString = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;

    return dateTimeString;
}

setInterval(function() {
    pTag.innerHTML = getCurrentDateTime();
}, 1000);