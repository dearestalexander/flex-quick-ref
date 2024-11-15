window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.range').forEach(rangeInput => {
    rangeInput.value = 100;

    const containerNumber = rangeInput.id.split('_')[1];
    document.documentElement.style.setProperty(`--width-c${containerNumber}`, `${rangeInput.value}%`);
    document.querySelector(`.c${containerNumber}`).style.width = `${rangeInput.value}%`;
  });
});

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.range-2').forEach(rangeInput => {
    rangeInput.min = 100;
    rangeInput.max = 280;
    rangeInput.value = 280;

    const containerNumber = rangeInput.id.split('_')[1];
    document.documentElement.style.setProperty(`--height-c${containerNumber}`, `${rangeInput.value}px`);
    document.querySelector(`.c${containerNumber}`).style.height = `${rangeInput.value}px`;
  });
});

document.querySelectorAll('.range').forEach(rangeInput => {
  rangeInput.addEventListener('input', function () {
    const containerNumber = this.id.split('_')[1];
    document.documentElement.style.setProperty(`--width-c${containerNumber}`, `${this.value}%`);
    document.querySelector(`.c${containerNumber}`).style.width = `${this.value}%`;
  });
});

document.querySelectorAll('.range-2').forEach(rangeInputTwo => {
  rangeInputTwo.addEventListener('input', function () {
    const containerNumber = this.id.split('_')[1];
    document.documentElement.style.setProperty(`--height-c${containerNumber}`, `${this.value}%`);
    document.querySelector(`.c${containerNumber}`).style.height = `${this.value}px`;
  });
});