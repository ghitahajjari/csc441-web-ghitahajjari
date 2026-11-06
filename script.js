// Class 15 - Step 1: this file is running
console.log("script.js is running");

// Class 15: Step 2: put this year in the footer
// Lab 15: Task 2: each piece stand on its own
const yearSpan = document.querySelector("#year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Class 15: Step 3: a button that changes the page
const themeButton = document.querySelector("#theme-toggle");

if (themeButton) {
    // Lab 15: Task 4: use the saved choice on arrival
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark"); 
        themeButton.textContent = "Light";
    }

    // Lab 15: Task 3 and 4: the label swaps, and the choice is remembered
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            themeButton.textContent = "Light";
            localStorage.setItem("theme", "dark");
        } else {
            themeButton.textContent = "Dark";
            localStorage.setItem("theme", "light");
        }
    });
};

// Lab 15: Task 5: button back to top
const backToTopButton = document.querySelector("#back-to-top");
if (backToTopButton) {
    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
};

// Class 16: Step 4: handle the submit
const contactForm = document.querySelector("#contact-form");

if (contactForm) {
    const formStatus = document.querySelector("#form-status");

    // Lab 16: Task 4: live character counter
    const charCount = document.querySelector("#char-count");

    // Lab 16: Task 1: my own check before accepting it
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const message = document.querySelector("#message").value.trim();

        if (message.length < 10) {
            formStatus.textContent = "Please write a bit more, at least 10 characters.";
            formStatus.classList.add("error");
            return;
        }

        formStatus.classList.remove("error");
        formStatus.textContent = "Thank you, " + name + ". Your message is ready to send.";
        contactForm.submit();
    });

    // Lab 16: Task 2: clear the error once they start fixing it
    contactForm.addEventListener("input", function () {
        if (formStatus.classList.contains("error")) {
            formStatus.textContent = "";
            formStatus.classList.remove("error");
        }

        // Lab 16: Task 4: live character count
        charCount.textContent = "Character count: " + document.querySelector("#message").value.length;
    });
}



