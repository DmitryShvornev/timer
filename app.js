window.addEventListener('load', () => {
    let seconds = 0;
    let tens = 0;
    let tensElement = document.querySelector('.tens');
    let secondsElement = document.querySelector('.seconds');
    let buttonStart = document.querySelector('.button-start');
    let buttonStop = document.querySelector('.button-stop');
    let buttonReset = document.querySelector('.button-reset');
    let interval;

    buttonStart.addEventListener('click', () => {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    });

    buttonStop.addEventListener('click', () => {
        clearInterval(interval);
    });

    buttonReset.addEventListener('click', () => {
        tensElement.innerHTML = "00";
        secondsElement.innerHTML= "00";
    });

    const startTimer = () => {
        tens++;
        if (tens <= 9) {
            tensElement.innerHTML = "0" + String(tens);
        } else {
            tensElement.innerHTML = String(tens);
        }
        if (tens > 99) {
            seconds++;
            secondsElement.innerHTML = "0" + String(seconds);
            tens = 0;
            tensElement.innerHTML = "00";
        }
        if(seconds > 9) {
            secondsElement.innerHTML = String(seconds);
        }
    }
})