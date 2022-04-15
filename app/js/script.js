document.addEventListener("DOMContentLoaded", function () {
    const rootElement = document.documentElement;

    let burger = document.querySelector(".hamburger"),
        header = document.querySelector(".header"),
        menuitem = document.querySelectorAll(".menu__item"),
        headerBtn = document.querySelector(".btn__header"),
        menuFlag = false,
        startScreen = document.querySelector('.js-start'),
        hederHeight = header.offsetHeight,
        body = document.body;


    window.onscroll = function () {
        fixed();
    }

    function fixed() {
        //&& window.pageYOffset >= headerFixed
        if (window.scrollY > 0) {
            header.classList.add("header__fixed");
            body.style.paddingTop = hederHeight + 'px';
        } else {
            header.classList.remove("header__fixed");
            body.style.paddingTop = 0;

        }
    }


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

    let popup = document.querySelectorAll(".popup");
    let popupContact = document.querySelector(".js-popup-contact");
    let contactBtn = document.querySelectorAll(".js-contact");
    let overlay = document.querySelector(".overlay");
    let popupClose = document.querySelectorAll(".popup__close");
    let popupSend = document.querySelector(".popup__btn");
    let fieldInput = document.querySelectorAll(".popup__form-input");
    let fieldTextarea = document.querySelectorAll(".popup__form-textarea");
    let popupThanks = document.querySelector(".js-popup-thanks");
    let popupCrypto = document.querySelector(".js-popup-crypto");
    let btnThanks = document.querySelector(".popup__btn--thank");
    let btnCrypto = document.querySelector(".js-crypto-btn");


    contactBtn.forEach((item, i) => {
        item.addEventListener("click", () => {
            popupContact.classList.add("popup__show");
            overlay.classList.add("active-overlay");
            rootElement.classList.add("block");


            popupSend.addEventListener("click",  async(e) => {
                e.preventDefault();

                let  form = document.getElementById("form");
                let formData = new FormData(form);

                const response = await fetch('sendemail.php',{
                    method: "POST",
                    body: formData
                });
                if(response.ok){
                    let result = await response.json();
                    alert(result.message);
                    form.reset()
                }else{
                    console.log("error")
                }

                fieldInput.forEach((item) => {
                    if (item.value !== '') {
                        popupThanks.classList.add("popup__show");
                        overlay.classList.add("active-overlay");
                        rootElement.classList.add("block");
                    }
                    if (popupThanks) {
                        btnThanks.addEventListener("click", () => {
                            popup.forEach((item) => {
                                item.classList.remove("popup__show");
                                overlay.classList.remove("active-overlay");
                                rootElement.classList.remove("block");
                            })
                        })
                    }
                })




            })

        })
    })
    btnCrypto.addEventListener("click", () => {
        popupCrypto.classList.add("popup__show");
        overlay.classList.add("active-overlay");
        rootElement.classList.add("block");
    })
    popupClose.forEach((item) => {
        item.addEventListener("click", () => {

            popup.forEach((item) => {
                item.classList.remove("popup__show");
                overlay.classList.remove("active-overlay");
                rootElement.classList.remove("block");
            })
        })
    })
    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {
            popupContact.classList.remove("popup__show");
            overlay.classList.remove("active-overlay");
            rootElement.classList.remove("block");

        }
        ;
    }, false);
    window.addEventListener("click", (e) => {
        let target = e.target;
        if (target.classList.contains("overlay")) {
            popup.forEach((item) => {
                item.classList.remove("popup__show");
                overlay.classList.remove("active-overlay");
                rootElement.classList.remove("block");
            })
        }
    })

    window.scrollSmooth = (container = document) => {
        const hrefAttributes = container.querySelectorAll("a[href*='#']");
        hrefAttributes.forEach((item) => {
            const href = item.href.split('#');

            const CURRENT_URL = window.location.origin + window.location.pathname;

            if (href[0] === CURRENT_URL) {
                item.addEventListener('click', (e) => {
                    e.preventDefault();

                    const scrollTarget = document.getElementById(href[1]);

                    const topOffset = 175;
                    const elementPosition = scrollTarget.getBoundingClientRect().top;
                    const offsetPosition = elementPosition - topOffset;

                    window.scrollBy({
                        top: offsetPosition,
                        behavior: 'smooth',
                    });
                });
            }
        });
    };

    window.scrollSmooth();


    /* copy */

    let copyText = document.querySelectorAll(".popup__item");

    copyText.forEach((item) => {
        item.querySelector(".popup__item-btn").addEventListener("click", () => {
            let input = item.querySelector(" .popup__item-copy");
            input.select();
            document.execCommand("copy");
            window.getSelection().removeAllRanges();
            if (window.screen.availWidth > 576) {
                document.querySelector(".popup__copy").style.display = "flex";
                setTimeout(function () {
                    document.querySelector(".popup__copy").style.display = "none";
                }, 2500);
            }

        })
    })


    let btnLanguage = document.querySelector(".header__language");
    let listLanguage = document.querySelector(".header__language-list");
    let itemsLang = document.querySelectorAll(".header__language-link");
    let enBtn = document.querySelector(".header__language-link.en-lang--header");

    let uaBtn = document.querySelector(".header__language-link.ua-lang--header");

    btnLanguage.addEventListener("click", (e) => {
        if (listLanguage.classList.contains("hide")) {
            listLanguage.classList.remove("hide");
            listLanguage.classList.add("show");
        } else {
            listLanguage.classList.remove("show");
            listLanguage.classList.add("hide");
        }

    })
    itemsLang.forEach((item     ) => {
        item.addEventListener("click", (e, i) => {
            item[i] = e.target.dataset.lang;

            btnLanguage.setAttribute('data-attr', item[i]);
            let span = document.querySelector(".header__language-btn");
            let newVar = span.innerHTML = item[i];
            console.log(newVar, "ne")
            let uaText = document.querySelectorAll(".ua-lang");
            let enText = document.querySelectorAll(".en-lang");
            if (newVar === 'EN') {
                enText.forEach((item, i) => {
                    item.style.position = "static";
                    uaText.forEach((item) => {
                        item.style.position = "absolute";
                        item.style.top = "-9999px";
                        item.style.left = "-9999px";
                    })
                })
            } else if (newVar === 'UA') {
                uaText.forEach((item)=>{
                    item.style.position = "static";
                    enText.forEach((item)=>{
                        item.style.position = "absolute";
                        item.style.top = "-9999px";
                        item.style.left = "-9999px";
                    })
                })
            }
        })
    })


    // const form = document.getElementById("form");
    // form.addEventListener("submit", formSend);
    //
    //
    // async function formSend(e){
    //     e.preventDefault();
    //
    //
    //
    //    let error = 0;
    //
    //    if(error === 0){
    //        console.log("13")
    //    }
    // }

    // function formValidate(form){
    //     let error = 0;
    //     let formReq = document.querySelectorAll("._req");
    //     formReq.forEach((item, i)=>{
    //         const input = item[i];
    //         formRemoveError(input)
    //
    //             if(input.classList.contains("_email")){
    //                 if(emailTest(input)){
    //                     formAddError(input);
    //                     error++;
    //                 }
    //             }else if(input.getAttribute("type") === "checkbox" && input.checked === false){
    //                 formAddError(input);
    //                 error++;
    //             }else{
    //                 if(input.value === ''){
    //                     formAddError(input);
    //                     error++;
    //                 }
    //             }
    //     })
    // }


    // function formAddError(input){
    //     input.parentElement.classList.add('error');
    //     input.classList.add('error');
    // }
    // function formRemoveError(input){
    //     input.parentElement.classList.remove('error');
    //     input.classList.remove('error');
    // }
    //
    // function emailTest(input){
    //     return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    // }
})