document.getElementById('generate').addEventListener('click', function() {
  const min = parseInt(document.getElementById('min').value);
  const max = parseInt(document.getElementById('max').value);
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById('randomNumber').innerText = randomNumber;
});

document.getElementById('reset').addEventListener('click', function() {
  document.getElementById('randomNumber').innerText = 'Click the button to generate';
  document.getElementById('min').value = 1;
  document.getElementById('max').value = 100;
});
