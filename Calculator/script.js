// This function clear all the values
function Clear() {
    document.getElementById("result").value = null;
}

function Solve(value) {
    document.getElementById("result").value += value;
} 

function Result() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

function Calc(button) {
    var display = document.getElementById("result").value;
    if (button === '%') {
        v = display / 100;
    } else if (button === '√') {
        v = Math.sqrt(display);
    } else if (button === '1/x') {
        v = 1 / display;
    } else if (button === 'x^2') {
        v = display * display;
    }
    document.getElementById("result").value = v;
}

function back() {
    var display = document.getElementById("result").value;
    document.getElementById("result").value = display.substr(0, display.length - 1);
}