// ==========================
// JARVIS
// ==========================

const orb = document.getElementById("jarvisOrb");
const micBtn = document.getElementById("micBtn");

// Welcome after page is visible
window.addEventListener("load", () => {

    setTimeout(() => {

        if (typeof speechSynthesis !== "undefined") {
            speechSynthesis.resume();
        }

        if (typeof welcomeVoice === "function") {
            welcomeVoice();
        }

    }, 3500);

});

// Orb click
orb.addEventListener("click", () => {

    orb.classList.add("active");

    if (typeof welcomeVoice === "function") {
        welcomeVoice();
    }

    setTimeout(() => {

        orb.classList.remove("active");

    }, 1000);

});

// Mic click
micBtn.addEventListener("click", () => {

    micBtn.style.transform = "scale(1.15)";

    if (typeof startListening === "function") {
        startListening();
    }

    setTimeout(() => {

        micBtn.style.transform = "scale(1)";

    }, 300);

});
