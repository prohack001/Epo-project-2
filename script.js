document.getElementById('welcomeButton').addEventListener('click', function () {
    document.getElementById('welcomeMessage').textContent = "Nous sommes ravis de vous accueillir sur le site dédié à l\'EPO. Explorez nos programmes et nos initiatives!";
});

// Ajoutez cette fonction en bas de votre script.js
function changeDynamicContent() {
    document.getElementById('dynamicContent').textContent = 'Le contenu a été changé grâce à JavaScript!';
}
// Appelons cette fonction au chargement de la page
window.onload = function () {
    changeDynamicContent();
};

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("#galerie img");
    images.forEach(image => {
        image.addEventListener("click", () => {
            alert("Vous avez cliqué sur une image !");
        });
    });
});