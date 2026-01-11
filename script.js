// Dynamic Greeting
const greetText = document.getElementById("greetText");
const hour = new Date().getHours();

if (hour < 12) {
    greetText.textContent = "Good Morning ";
} else if (hour < 18) {
    greetText.textContent = "Good Afternoon ";
} else {
    greetText.textContent = "Good Evening ";
}

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || !email.includes("@")) {
        alert("Please enter a valid name and email");
    } else {
        alert("Message sent successfully!");
        this.reset();
    }
});
// Home / About click message
document.getElementById("homeLink").addEventListener("click", function () {
    alert("Welcome to the Home section ");
});

// Skills click message
document.getElementById("skillsLink").addEventListener("click", function () {
    alert("Here are my technical skills ");
});

// Contact click message
document.getElementById("contactLink").addEventListener("click", function () {
    alert("Feel free to contact me ");
});

// Scroll to Top Button
const topBtn = document.getElementById("topBtn");

window.onscroll = () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill all the fields");
    } else {
        alert("Thank you " + name + "! Your message has been submitted successfully");
        this.reset();
    }
});

