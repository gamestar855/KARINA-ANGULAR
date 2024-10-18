// Configuración de la fecha del festival
const festivalDate = new Date('2025-04-30T00:00:00').getTime();

// Actualizar el conteo regresivo cada segundo
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = festivalDate - now;

    // Cálculo de días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Actualización de los elementos del DOM
    document.getElementById('days').querySelector('.number').innerText = days;
    document.getElementById('hours').querySelector('.number').innerText = hours;
    document.getElementById('minutes').querySelector('.number').innerText = minutes;
    document.getElementById('seconds').querySelector('.number').innerText = seconds;

    // Si el conteo llega a cero
    if (distance < 0) {
        clearInterval(countdown);
        document.querySelector('.hero h1').innerText = "¡El festival ha comenzado!";
        document.querySelector('.countdown-container').style.display = "none";
    }
}, 1000);
