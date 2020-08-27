// const TypeWriter = function (txtElement, words, wait = 3000) {
//     this.txtElement = txtElement;
//     this.words = words;
//     this.txt = ``;
//     this.wordIndex = 0;
//     this.wait = parseInt(wait, 10);
//     this.type();
//     this.isDeleting = false;
// };

// // Type Method
// TypeWriter.prototype.type = function () {
//     // Current index of word, using modulus so it only use all the length (looping)
//     const current = this.wordIndex % this.words.length;
//     // Get full text of current word
//     const fullTxt = this.words[current];

//     // Check if deleting state
//     if (this.isDeleting) {
//         // Remove char
//         this.txt = fullTxt.substring(0, this.txt.length - 1);
//     } else {
//         // Add char
//         this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }

//     // Intert txt into element
//     this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//     // Type speed
//     let typeSpeed = 300;

//     if (this.isDeleting) {
//         typeSpeed /= 2;
//     }

//     // If word is complete
//     if (!this.isDeleting && this.txt == fullTxt) {
//         // A little pause at the end
//         typeSpeed = this.wait;
//         // Set delete to true
//         this.isDeleting = true;
//     } else if (this.isDeleting && this.txt === "") {
//         this.isDeleting = false;
//         // Move to next word
//         this.wordIndex++;
//         // Pause before start typing
//         typeSpeed = 500;
//     }

//     setTimeout(() => this.type(), typeSpeed);
// };

// ES6 Class
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = ``;
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        // Current index of word, using modulus so it only use all the length (looping)
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];

        // Check if deleting state
        if (this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Intert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // Type speed
        let typeSpeed = 300;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        // If word is complete
        if (!this.isDeleting && this.txt == fullTxt) {
            // A little pause at the end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === "") {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
    const txtElement = document.querySelector(".txt-type");
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");

    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}
