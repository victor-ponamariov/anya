import 'owl.carousel/dist/owl.carousel.min.js';
import 'owl.carousel/dist/assets/owl.carousel.css';

// import 'css/style.css';
// import 'less/blocks/fonts.less';
// import 'less/blocks/header.less';
import 'less/blocks/base.less';
// import 'less/blocks/slider.less';
// import 'less/blocks/snowboards.less';
// import 'less/blocks/description.less';
// import 'less/blocks/features.less';
// import 'less/blocks/footer.less';

import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'normalize.css/normalize.css';

import 'img/icons/logo.svg';
import 'img/products/board-1.png';
import 'img/products/board-2.png';
import 'img/products/board-3.png';
import 'img/products/board-4.png';
import 'img/products/board-5.png';

import 'img/posts/post-1.jpg';
import 'img/posts/post-2.jpg';
import 'img/posts/post-3.jpg';
import 'img/posts/post-4.jpg';
import 'img/icons/usa-flag.png'


$(document).ready(function(){
    $(".slider").owlCarousel({
        items: 1,
        autoplay: true,
        autoplayHoverPause: true,
        loop: true
    });

    $(".slider-snowboards").owlCarousel({
        items: 3,
        autoplay: true,
        autoplayHoverPause: true,
        loop: true,
        nav: true,
        center: true,
        navText: ['', '']
    });
});
