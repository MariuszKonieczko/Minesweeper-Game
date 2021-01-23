import { UI } from './UI.js';

export class Timer extends UI {
  numberOfSeconds = 0;
  maxNumberOfSeconds = 999;
  element = null;
  interval = null;

  init() {
    this.element = this.getElement(this.UiSelectors.timer);
    this.setTimerValue(this.numberOfSeconds);
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.updataTimer();
    }, 1000);
  }
  stopTimer() {
    clearInterval(this.interval);
  }

  resetTimer() {
    this.numberOfSeconds = 0;
    this.setTimerValue(this.numberOfSeconds);
    this.stopTimer();
    this.startTimer();
  }

  updataTimer() {
    this.numberOfSeconds++;

    this.numberOfSeconds <= this.maxNumberOfSeconds
      ? this.setTimerValue(this.numberOfSeconds)
      : this.stopTimer();
  }

  setTimerValue(value) {
    this.element.textContent = value;
  }
}
