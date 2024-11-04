function tuitionDiscount() {
    let name = prompt("Enter your name:");
    let totalFees = prompt("Enter your total tuition fees:");
    let birthYear = prompt("Enter your birth year:");
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    let discount = 0;
    let output = document.getElementById("output");

    if (totalFees > 50000 && age > 21) {
        discount = 0.15;
    } else if (totalFees > 40000 && age > 20) {
        discount = 0.10;
    } else if (totalFees > 30000 && age > 19) {
        discount = 0.05;
    } else {
        discount = 0.02;
    }

    let discountAmount = totalFees * discount;
    let payableFees = totalFees - discountAmount;

    output.innerHTML = `${name}, your discount amount is: ${discountAmount}<br>
                        Your payable tuition fees are: ${payableFees}`;
}