const words = ["AI/ML Engineer", "Frontend Web Developer", "Programmer", "Video Editor"];
let index = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;
const toggleBtn = document.getElementById('theme-toggle');


toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});

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

// for touch support
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.querySelector('.card-inner').classList.toggle('flipped');
    });
});


// Email setup
(function () {
    emailjs.init("D7sKbit7EJwFjlcyQ");
})();
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_nec1q4h", "template_oz84sho", this)
        .then(function () {
            document.getElementById("response-message").textContent = "✅ Email sent successfully!";
        }, function (error) {
            document.getElementById("response-message").textContent = "❌ Failed to send email.";
            console.error("EmailJS error:", error);
        });

    this.reset(); // Clear the form after submission
});

type();



