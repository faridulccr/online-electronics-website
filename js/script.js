// jQuery code for slider
const slides = $(".slides");
const slide = $(".slide");
let count = 0;

setInterval(function () {
    // animate(cssStyle, speed, callback)
    if (window.innerWidth > 768) {
        slides.animate({ "margin-left": "-=68vw" }, 1200, function () {
            count++;
            if (count === 3) {
                slides.css({ "margin-left": "0" });
                count = 0;
            }
        });
    } else {
        slides.animate({ "margin-left": "-=115%" }, 1200, function () {
            count++;
            if (count === 3) {
                slides.css({ "margin-left": "0" });
                count = 0;
            }
        });
    }
}, 4000);

// jQuery code for main-menu show and hide
const main_munu = $(".section2 nav");
const menuBtn = $(".section1 .mainmenu span");
menuBtn.click(function () {
    main_munu.slideToggle("slow");
});

// jQuery code for sub-menu show and hide
const navigation = $(".toggle");
const submenu_container = $(".submenu-container");
navigation.click(function () {
    submenu_container.slideToggle("slow");
});
