document.addEventListener('DOMContentLoaded', function () {
    // Inicializar todos los sliders
    const sliders = document.querySelectorAll('.swiper');
    const swiperInstances = [];

    sliders.forEach((slider) => {
        const swiper = new Swiper(slider, {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            navigation: {
                nextEl: slider.querySelector('.swiper-button-next'),
                prevEl: slider.querySelector('.swiper-button-prev'),
            },
            on: {
                slideChangeTransitionStart: function () {
                    // Pausar todos los videos dentro de este slider
                    const videos = slider.querySelectorAll('.swiper-slide video');
                    videos.forEach(video => video.pause());
                },
            }
        });

        swiperInstances.push(swiper);
    });

    // Pausar el video activo si el usuario cambia de pestaña
    window.addEventListener('blur', () => {
        swiperInstances.forEach(swiper => {
            const activeVideo = swiper.slides[swiper.activeIndex].querySelector('video');
            if (activeVideo && !activeVideo.paused) {
                activeVideo.pause();
            }
        });
    });

 

});

function descargarJar() {
    const link = document.createElement('a');
    link.href = 'juegoZB.jar';           // relativo a index.html
    link.download = 'White Monsters.jar'; // nombre con extensión
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


