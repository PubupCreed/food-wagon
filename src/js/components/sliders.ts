import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

new Splide('.hero-banner__slider', {
    arrows: false,
    rewind: true,
    autoplay: true,
    pagination: false,
    lazyLoad: 'sequential',
    type: 'fade',
    perPage: 1,
    interval: 5000,
    speed: 3000,
}).mount();
