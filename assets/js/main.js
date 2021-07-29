$(document).ready(function(){

    // Start Pre-Loader
    $(window).on ("load", function() {
        $(".preloader").fadeOut(1000, function() {
            $(this).parent().css("overflow", "auto")
        });
    })
    // Variables 
    let
        nav = $("nav"),
        allInputs = document.getElementsByTagName("input");

    // Start Global Code
    // Hide Placeholder on clicking...
    for(let i=0; i< allInputs.length; i++) {
        const input = allInputs[i];
        if(input.hasAttribute("placeholder")) {
            input.onfocus = function(){
                input.setAttribute("data-place", input.placeholder);
                input.setAttribute("placeholder", "");
            }
            input.onblur = function() {
                input.setAttribute("placeholder", input.getAttribute("data-place"));
                input.setAttribute("data-place", "");
            }
        }
    }

    // Start Navbar
    // Add class(box-shadow) on nav when scroll
    $(window).scroll(function() {
        if($(window).scrollTop() > 100) {
            nav.addClass("nav-shadow");
        } else {
            nav.removeClass("nav-shadow");
        }
    });

    // add class Active on links on clicking
    nav.find(".navbar-nav li a").click(function(e) {
        e.preventDefault();
        $(this).addClass("active").parent().siblings().find("a").removeClass("active");
        $("body, html").animate({
            scrollTop: ($('#' + $(this).data("scroll")).offset().top) -50
        }, 1000)
    })

    // Start Videos section
    // Add class show on clicking 
    let
        mainVideo = document.querySelectorAll("#video .videos > div"),
        liTab = document.querySelectorAll("#video ul li");

        for(let i=0; i<liTab.length; i++) {
            liTab[i].addEventListener("click", function() {
                document.querySelector("#video ul li.show").classList.remove("show");
                liTab[i].classList.add("show");
                document.querySelector("#video .videos > div.active").classList.remove("active");
                mainVideo[i].classList.add("active");
            })
        }

    // Start Plugins

    // owlCarousel
    $(".header .owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        margin: 20
    });
    $("section.services .owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        margin: 20,
        responsive:{
            0:{
                items: 1
            },
            768:{
                items: 2
            },
            992:{
                items: 3
            }
        }
        
    });

    $(".portfolio .owl-carousel").owlCarousel ({
        margin: 30,
        loop: true,
        autoplay: true,
        responsive:{
            0:{
                items: 1
            },
            768:{
                items: 2
            },
            992:{
                items: 3
            }
        }
    });
    $(".owl-carousel").owlCarousel ({
        margin: 50,
        loop: true,
        autoplay: true
    });
    // Wow
    new WOW().init();
    
    // Counter-Up
    $('.counter').counterUp({
        time: 1000
    });



});