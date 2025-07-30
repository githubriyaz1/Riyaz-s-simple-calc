let memory = 0;

function appendValue(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function backspace() {
  let input = document.getElementById('display').value;
  document.getElementById('display').value = input.slice(0, -1);
}

function calculate() {
  try {
    let result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
    addToHistory(result);
  } catch {
    document.getElementById('display').value = 'Error';
  }
}

function memoryAdd() {
  memory += parseFloat(document.getElementById('display').value || 0);
}

function memorySubtract() {
  memory -= parseFloat(document.getElementById('display').value || 0);
}

function memoryRecall() {
  document.getElementById('display').value = memory;
}

function memoryClear() {
  memory = 0;
}

function addToHistory(result) {
  const log = document.getElementById('history-log');
  const item = document.createElement('li');
  item.textContent = result;
  log.prepend(item); // show latest first
}

function toggleTheme() {
  document.body.classList.toggle('dark-theme');
}
