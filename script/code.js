function convertMinutesToSeconds() {
    const minutesInput = document.querySelector('#minutes');
    const secondsInput = document.querySelector('#seconds');

    if (!minutesInput || !secondsInput) {
        return;
    }

    const minutes = Number(minutesInput.value);
    if (isNaN(minutes)) {
        return;
    }

    const seconds = minutes * 60;
    secondsInput.value = seconds;
}
