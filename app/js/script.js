document.addEventListener("DOMContentLoaded", function () {
    const rootElement = document.documentElement;

    let burger = document.querySelector(".hamburger"),
        header = document.querySelector(".header"),
        menuitem = document.querySelectorAll(".menu__item"),
        headerBtn = document.querySelector(".btn__header"),
        menuFlag = false,
        startScreen = document.querySelector('.js-start');



    // window.onscroll = function () {
    //     fixed();
    // }

    // function fixed() {
    //     //&& window.pageYOffset >= headerFixed
    //     if (window.scrollY > 0) {
    //         header.classList.add("header__fixed");
    //     } else {
    //         header.classList.remove("header__fixed");
    //     }
    // }


    if (burger) {
        burger.addEventListener("click", () => {
            if (!menuFlag) {
                rootElement.classList.add("block");
                header.classList.add("header--open");
                burger.classList.add("hamburger__active");
                menuFlag = true;
            } else {
                rootElement.classList.remove("block");
                header.classList.remove("header--open");
                burger.classList.remove("hamburger__active");
                menuFlag = false;
            }
        })

        headerBtn.addEventListener("click", () => {
            rootElement.classList.remove("block");
            header.classList.remove("header--open");
            burger.classList.remove("hamburger__active");
            menuFlag = false;
        });
    }
    ;
    menuitem.forEach((item) => {
        item.addEventListener("click", () => {
            rootElement.classList.remove("block");
            header.classList.remove("header--open");
            burger.classList.remove("hamburger__active");
            menuFlag = false;
        });
    });


    const swiperGallery = new Swiper(".gallery__swiper", {
        slidesPerView: "auto",
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".arrow__next",
            prevEl: ".arrow__prev",
        },
    })

    let galleryVideo = document.querySelectorAll(".gallery__wrap"),
        videoPlay = document.querySelectorAll(".gallery__slide-video"),
        galleryDecor = document.querySelectorAll(".gallery__decor");


    galleryVideo.forEach((item, i) => {
        item.addEventListener("click", (e) => {
            galleryDecor[i].style.display = 'none';
            videoPlay[i].play();
        });
        item.addEventListener("mouseleave", (e) => {
            if (!e.target.classList.contains("gallery__slide-video")) {
                galleryDecor[i].style.display = 'block';
                videoPlay[i].load();
            }
        });
    })
    console.log("DOM fully loaded and parsed");
})