$(document).ready(function(){
$('.jumbotron').parallax({imageSrc: '/assets/header-image.jpg'});

$('.jumbotron').parallax({
  calibrateX: true,
  calibrateY: true,
  invertX: true,
  invertY: true,
  limitX: false,
  limitY: 10,
  scalarX: 2,
  scalarY: 8,
  frictionX: 0.2,
  frictionY: 0.8,
  originX: 0.0,
  originY: 1.0
});
    
    });