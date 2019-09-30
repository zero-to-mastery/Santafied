document.addEventListener("DOMContentLoaded", function () {
  var slider = tns({
    container: '#carousel',
    items: 1,
    mode: 'gallery',
    center: true,
    nav: false,
    mouseDrag: true,
    speed: 1500,
    controlsText: ['<i class="left-arrow fa fa-angle-left"></i>', '<i class="right-arrow fa fa-angle-right"></i>']
  });
});