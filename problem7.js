function vowelConsonant() {
    let char = prompt("Enter a character:").toLowerCase();
    let output = document.getElementById("output");
    if ("aeiou".includes(char)) {
        output.textContent = char + " is a vowel.";
    } else {
        output.textContent = char + " is a consonant.";
    }
}