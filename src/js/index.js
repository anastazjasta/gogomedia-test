import '../scss/main.scss';

window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        }
    })
  })