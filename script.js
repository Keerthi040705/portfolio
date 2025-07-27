const textElement = document.getElementById("typing-text");
const texts = ["Student of VIT-AP University"]; // Texts to cycle
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = texts[textIndex];
    if (isDeleting) {
        textElement.textContent = currentText.substring(0, charIndex--);
    } else {
        textElement.textContent = currentText.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => isDeleting = true, 1000); // Wait before deleting
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length; // Move to next text
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100); // Speed control
}

// Start typing effect
typeEffect();
