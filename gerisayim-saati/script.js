const countdownDate = new Date("Jan 1, 2026 00:00:00").getTime();
const clock = document.getElementById("clock");

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
        clock.innerHTML = "🎉 Happy New Year! 🎉";
        clearInterval(interval);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const timeArray = [days, hours, minutes, seconds];

    clock.innerHTML = timeArray.map(time => `<span class="flip">${time}</span>`).join("");
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();
