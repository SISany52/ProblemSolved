function greaterNumber() {
    let num1 = prompt("Enter the first number:");
    let num2 = prompt("Enter the second number:");
    let output = document.getElementById("output");
    if (num1 > num2) {
        output.textContent = "The greater number is: " + num1;
    } else if (num2 > num1) {
        output.textContent = "The greater number is: " + num2;
    } else {
        output.textContent = "Both numbers are equal.";
    }
}