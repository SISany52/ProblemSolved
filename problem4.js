function calculateGrade() {
    let marks = prompt("Enter your total marks out of 100:");
    let grade;
    let output = document.getElementById("output");
    if (marks >= 90) {
        grade = 'A';
    } else if (marks >= 80) {
        grade = 'B';
    } else if (marks >= 70) {
        grade = 'C';
    } else if (marks >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    output.textContent = "Your grade is: " + grade;
}