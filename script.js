function toggleLanguage() {
    const currentLang = document.documentElement.lang;
    document.documentElement.lang = currentLang === "fr" ? "en" : "fr";

    // Mise à jour du texte si nécessaire
    if (currentLang === "fr") {
        document.querySelector("h1").textContent = "Remi Potiron Portfolio";
        document.querySelector("h2").textContent = "Professional Projects";
        document.querySelector(".confidentiality-note").textContent = "Professional projects may be less detailed due to confidentiality requirements.";
    } else {
        document.querySelector("h1").textContent = "Portfolio Remi Potiron";
        document.querySelector("h2").textContent = "Projets Professionnels";
        document.querySelector(".confidentiality-note").textContent = "Les projets professionnels peuvent être moins détaillés en raison des exigences de confidentialité.";
    }
}
