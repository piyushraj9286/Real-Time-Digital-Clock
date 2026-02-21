let is24Hour = true;

function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    let period = "";

    if (!is24Hour) {
        period = hours >= 12 ? " PM" : " AM";
        hours = hours % 12 || 12;
    }

    const formattedTime =
        String(hours).padStart(2, '0') + ":" +
        String(minutes).padStart(2, '0') + ":" +
        String(seconds).padStart(2, '0') +
        period;

    document.getElementById("clock").textContent = formattedTime;

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];

    const dayName = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    document.getElementById("date").textContent =
        `${dayName}, ${date} ${month} ${year}`;
}

function toggleFormat() {
    is24Hour = !is24Hour;
}

setInterval(updateClock, 1000);
updateClock();
