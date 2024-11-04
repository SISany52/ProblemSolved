function maxNumber() {
    let num1 = prompt("Enter the first number:");
    let num2 = prompt("Enter the second number:");
    let num3 = prompt("Enter the third number:");
    let max = Math.max(num1, num2, num3);
    let output = document.getElementById("output");
    output.textContent = "The greatest number is: " + max;
}