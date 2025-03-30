document.addEventListener("DOMContentLoaded", function () {
    const loaderContainer = document.querySelector(".loader-container");
    const mainContent = document.getElementById("main-content");

    const loadTime = 1500; // Tiempo de carga en milisegundos (1.5 segundos)

    setTimeout(() => {
        // Oculta el loader con una transición suave
        loaderContainer.style.opacity = "0";
        loaderContainer.addEventListener("transitionend", () => {
            loaderContainer.style.display = "none";
        });

        // Muestra el contenido principal con una transición suave
        mainContent.style.opacity = "1";
    }, loadTime);
});
