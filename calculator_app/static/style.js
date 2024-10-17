let screen = document.getElementById("calculator-screen");

function appendValue(value) {
    screen.value += value;
}

function clearScreen() {
    screen.value = "";
}

function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch (e) {
        screen.value = "Error";
    }
}
