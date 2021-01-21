class CountdownTimer {
  constructor({ selector, targetDate }) {
    (this.DaysRef = document.querySelector(
      `${selector}  span[data-value="days"]`,
    )),
      (this.HoursRef = document.querySelector(
        `${selector}  span[data-value="hours"]`,
      )),
      (this.MinutesRef = document.querySelector(
        `${selector}  span[data-value="mins"]`,
      )),
      (this.SecondsRef = document.querySelector(
        `${selector} span[data-value="secs"]`,
      ));

    function setTimer() {
      let time = targetDate.getTime() - Date.now();
      this.days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.DaysRef.textContent = pad(this.days);

      this.hours = Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      this.HoursRef.textContent = pad(this.hours);

      this.mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      this.MinutesRef.textContent = pad(this.mins);

      this.secs = Math.floor((time % (1000 * 60)) / 1000);
      this.SecondsRef.textContent = pad(this.secs);
    }
    function pad(string) {
      return string.toString().padStart(2, '0');
    }
    setInterval(setTimer.bind(this), 1000);
  }
}

const Timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});
