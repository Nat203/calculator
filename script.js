function calc(value) {
  const display = document.getElementById("d1");
  if (value === '=') {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  document.getElementById("d1").value = '';
}
