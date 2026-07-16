// COCK_team official scripts


// Плавное появление страницы

document.addEventListener("DOMContentLoaded", () => {

    document.body.style.opacity = "1";

});



// Наведение на игроков (будем расширять)

const players = document.querySelectorAll(".player");


players.forEach(player => {


    player.addEventListener("mouseenter", () => {

        player.classList.add("active");

    });



    player.addEventListener("mouseleave", () => {

        player.classList.remove("active");

    });



});
