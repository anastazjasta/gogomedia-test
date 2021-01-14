import '../scss/main.scss';
import 'glider-js';

window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        },
        
        responsive: [
            {
                breakpoint: 801,
                settings: {
                  slidesToShow: 2
              }
          },
            {
              breakpoint: 1201,
              settings: {
                slidesToShow: 3
            }
        }
        ]
    })
  })