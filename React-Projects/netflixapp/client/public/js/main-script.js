
$(document).ready(function () {

    //autoplay hero section video 

    // setTimeout(function () {
    //     document.getElementById("hero-video").play();
    // }, 5000);

    //onscroll change header color 
    

    //owl carousel settings

    $(".owl-carousel").owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
    });

    //autoplay video on hover over an video item
    // var figure = $(".video").hover(hoverVideo, hideVideo);

    // function hoverVideo(e) {
    //     $('video', this).get(0).play();
    // }

    // function hideVideo(e) {
    //     $('video', this).get(1).pause();
    //     $('video', this).get(0).load();
    // } 
    

});

