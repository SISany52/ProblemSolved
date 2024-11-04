function votingEligibility() {
    let age = prompt("Enter your age:");
    let output = document.getElementById("output");
    if (age >= 18) {
        output.textContent = "You are eligible to cast a vote.";
    } else {
        output.textContent = "You are not eligible to cast a vote.";
    }
}