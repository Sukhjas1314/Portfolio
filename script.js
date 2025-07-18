const words = ["AI/ML Engineer", "Frontend Web Developer", "Programmer", "Video Editor"];
let index = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

function type() {
    const target = document.getElementById("typing-text");
    if (index >= words.length) index = 0;
    currentWord = words[index];

    if (isDeleting) {
        target.textContent = currentWord.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            index++;
        }
    }
    else {
        target.textContent = currentWord.substring(0, charIndex++)
        if (charIndex > currentWord.length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }
    }
    setTimeout(type, isDeleting ? 50 : 100);
}

type();
