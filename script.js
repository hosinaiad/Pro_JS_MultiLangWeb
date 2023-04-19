// Lessons (51) vs (53) Explain: How to create website multi language:
// طريقة إنشاء موقع متعدد اللغات + multi language website
// ..........................................................................
// Note: ...................... .
// ..........................................................................

let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let title = document.getElementById("title");

let welcome = document.getElementById("welcome-text");
let about = document.getElementById("about");
let aboutText = document.getElementById("about-text");
let contact = document.getElementById("contact");


arabic.onclick = () => {
    setLanguage("arabic");
    localStorage.setItem("Lang", "arabic");
};
english.onclick = () => {
    setLanguage("english");
    localStorage.setItem("Lang", "english");
};


onload = () => {
    setLanguage(localStorage.getItem("Lang"));
};


function setLanguage(getLanguage) {
    if (getLanguage === "arabic") {
        title.innerHTML = "موقع متعدد اللغات";
        welcome.innerHTML = "مرحبا بكم ..";
        about.innerHTML = "معلومات عنا ..";
        aboutText.innerHTML = "انا استاذ برمجيات ومهندس";
        contact.innerHTML = "اتصل بنا ..";

    } else if (getLanguage === "english") {
        title.innerHTML = "ً  Website multi language ..";
        welcome.innerHTML = "Welcome to our website ..";
        about.innerHTML = "about us ..";
        aboutText.innerHTML = "I'm a teacher and a software Developer.";
        contact.innerHTML = "Contact us ..";
    }
}