// Welcome message
window.onload = function () {
    setTimeout(() => {
        alert("🛡 Welcome to the Cyber Safety Awareness Website!\nLearn how to stay safe online.");
    }, 500);
};

// Quiz Function
function checkQuiz() {

    let score = 0;

    for (let i = 1; i <= 5; i++) {

        let answer = document.querySelector(`input[name="q${i}"]:checked`);

        if (answer) {
            score += Number(answer.value);
        }

    }

    let message = "";

    if (score == 5) {
        message = "🎉 Excellent! You scored 5/5.";
    }
    else if (score >= 3) {
        message = "👍 Good Job! You scored " + score + "/5.";
    }
    else {
        message = "⚠ You scored " + score + "/5. Learn more and try again!";
    }

    document.getElementById("result").innerHTML = message;
}

// ==========================
// Back To Top Button
// ==========================

const topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.right = "25px";
topButton.style.padding = "12px 16px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.fontSize = "20px";
topButton.style.display = "none";
topButton.style.cursor = "pointer";
topButton.style.zIndex = "999";
topButton.style.background = "#2563eb";
topButton.style.color = "white";

window.onscroll = function () {

    if (document.documentElement.scrollTop > 300) {
        topButton.style.display = "block";
    }
    else {
        topButton.style.display = "none";
    }

};

topButton.onclick = function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};

// ==========================
// Fade In Animation
// ==========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {
    threshold: 0.15
});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";

    observer.observe(section);

});

// ==========================
// Typing Effect
// ==========================

const title = document.querySelector(".hero h1");

const text = "Stay Safe Online";

title.innerHTML = "";

let index = 0;

function typeWriter() {

    if (index < text.length) {

        title.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 90);

    }

}

typeWriter();

// ==========================
// Current Year in Footer
// ==========================

const footer = document.querySelector("footer p");

footer.innerHTML =
"Cyber Safety Awareness Website © " + new Date().getFullYear();
