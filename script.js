/*======================================================
CUENTA REGRESIVA
======================================================*/

const fechaEvento = new Date("March 14, 2027 18:30:00").getTime();

function actualizarContador(){

    const ahora = new Date().getTime();

    const diferencia = fechaEvento - ahora;

    if(diferencia <= 0){

        document.getElementById("dias").textContent = "00";
        document.getElementById("horas").textContent = "00";
        document.getElementById("minutos").textContent = "00";
        document.getElementById("segundos").textContent = "00";

        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

}

actualizarContador();

setInterval(actualizarContador,1000);



/*======================================================
FORMULARIO CONFIRMACION
======================================================*/



const URL_SCRIPT =
"https://script.google.com/macros/s/AKfycbw9TGDqPjkPtsP1CQGrSfa4xAR8u1Ax15bhxNWMxDaQHswr2G0dV0xoovO60oQF9qwX6A/exec";

const formulario = document.getElementById("formConfirmacion");

formulario.addEventListener("submit", async function(e) {

    e.preventDefault();

    const datos = {
        nombre: document.getElementById("nombre").value.trim(),
        invitados: document.getElementById("invitados").value,
        asistencia: document.getElementById("asistencia").value,
        mensaje: document.getElementById("mensaje").value.trim()
    };

    console.log("Datos enviados:", datos);

    try {

        await fetch(URL_SCRIPT, {
            method: "POST",
            mode: "no-cors",
            body: JSON.stringify(datos)
        });

        alert("¡Gracias por confirmar tu asistencia! 💕");

        formulario.reset();

    } catch (error) {

        console.error("Error:", error);

        alert("No se pudo enviar la confirmación.");

    }

});





const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");


btn.addEventListener("click", () => {


    if(music.paused){

        music.play();

        btn.innerHTML="🔊";

    }else{

        music.pause();

        btn.innerHTML="🎵";

    }
});




new Swiper(".miGaleria", {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 20,
    
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },

    /* === NUEVO: Configuración de las flechas === */
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 25
        }
    }
});

const stars = document.querySelector('.stars');

for(let i=0;i<160;i++){
    const s = document.createElement('div');
    s.classList.add('star');

    s.style.left = Math.random()*100 + '%';
    s.style.animationDuration = (Math.random()*8 + 5) + 's';
    s.style.animationDelay = (Math.random()*5) + 's';
    s.style.width = (Math.random()*3 + 1) + 'px';
    s.style.height = s.style.width;

    stars.appendChild(s);
}
