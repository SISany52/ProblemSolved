function temperatureState() {
    let temp = prompt("Enter the temperature in centigrade:");
    let output = document.getElementById("output");
    if (temp < 0) {
        output.textContent = "Freezing weather";
    } else if (temp <= 10) {
        output.textContent = "Very Cold weather";
    } else if (temp <= 20) {
        output.textContent = "Cold weather";
    } else if (temp <= 30) {
        output.textContent = "Normal in Temp";
    } else if (temp <= 40) {
        output.textContent = "It's Hot";
    } else {
        output.textContent = "It's Very Hot";
    }
}