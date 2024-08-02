const typedText = document.querySelector('.typed');
const text = typedText.textContent;
typedText.textContent = '';

let typingSpeed = 50; // Adjust typing speed in milliseconds

function typeWriter() {
  if (i < text.length) {
    typedText.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, typingSpeed);
  }
}

let i = 0;
typeWriter();



