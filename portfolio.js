const typingElement = document.getElementById("typing");
    const words = ["Frontend Developer", "Python Learner", "Canva & Figma Designer"];
    let wordIndex = 0;
    let charIndex = 0;
    let currentWord = "";
    let isDeleting = false;

    function type() {
      currentWord = words[wordIndex];
      if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex--);
        if (charIndex < 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      } else {
        typingElement.textContent = currentWord.substring(0, charIndex++);
        if (charIndex > currentWord.length) {
          isDeleting = true;
          setTimeout(type, 1000);
          return;
        }
      }
      setTimeout(type, isDeleting ? 60 : 120);
    }

    type();