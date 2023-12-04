let breakTime = 19;
let studyTime = 59;
const clockElement = "time"

// I know this isn't the best way of doing this

class Clock {
    #startTime;
    #currentTime;
    #distance;

    constructor(element) {
        this.element = element
    }

    startCountdown(minutes) {
        this.#startTime = Date.now();

        let x = setInterval(() => {
            this.#currentTime = Date.now();

            this.#distance = this.#currentTime - this.#startTime;

            let minutes = Math.floor((this.#distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((this.#distance % (1000 * 60)) / 1000);

            document.getElementById(this.element).innerHTML = (studyTime - minutes) + ":" + (60 - seconds);

            if (this.#distance < 0) {
                clearInterval(x);
                this.startBreak(breakTime)
            }
        }, 1000);
    }

    startBreak(minutes) {
        this.#startTime = Date.now();

        let x = setInterval(() => {
            this.#currentTime = Date.now();

            this.#distance = this.#currentTime - this.#startTime;

            let minutes = Math.floor((this.#distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((this.#distance % (1000 * 60)) / 1000);

            document.getElementById(this.element).innerHTML = (studyTime - minutes) + ":" + (60 - seconds);

            if (this.#distance < 0) {
                clearInterval(x);
                this.startCountdown(studyTime)
            }
        }, 1000);
    }

    setMessage(message) {
        document.getElementById('session')
    }
}

new Clock("clock").startCountdown(studyTime)
