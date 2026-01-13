
new Swiper(".myEventSlider", {
    loop:true,
    spaceBetween:30,
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    breakpoints:{
        0:{ slidesPerView:1 },
        768:{ slidesPerView:2 },
        992:{ slidesPerView:3 }
    }
});
