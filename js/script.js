$(document).ready(function() {


  $('#fullpage').fullpage({
    anchors: ['vela', 'bulk-editing', 'platforms', 'sales-automation', 'photo-editing', 'sign-up-now', 'more'],
    sectionsColor: ['#82b8f6', '#fffcf4', '#8f8f8f', '#fbf9f2', '#e6e6e6', '#ffffff', '#dddddd'],


    autoScrolling: false,
    fitToSection: false,
    fixedElements: '.header',
    css3: true,

    afterLoad: function(anchorLink, index){
      //section 1

      if(index == 1){

        $('#video-two')[0].play();

      }

      //section 2
      if(index == 2){
        $('#video-two')[0].play();


      }

      //section 3
      if(index == 3){

      }


      if(index == 4){
        $('.sales').addClass('bg');
        $('.ipad').addClass('on');
      }


    },


    onLeave: function(index, newIndex, direction){

      if(index == 1){
        $('body').addClass('over');
        $('.learn-more').removeClass('on');
        $('.learn-more').addClass('off');
      }

      if(index == 2 && direction =='up'){
        $('body').removeClass('over');
      }

    }


  });


  $('.burg').on('click', function() {
    $("body").toggleClass('nav-on');
    $("#fullscreen").css('width',$(window).width()-400);
  });

  $('.bulk-image-one').on('click', function() {
    $(".bulk").removeClass('two-on');
    $(".bulk").removeClass('three-on');
    $(".bulk").addClass('one-on');
    $('#video-one')[0].play();
    $('#video-two')[0].pause();
    $('#video-three')[0].pause();
  });


  $('.bulk-image-two').on('click', function() {
    $(".bulk").removeClass('one-on');
    $(".bulk").removeClass('three-on');
    $(".bulk").addClass('two-on');
    $('#video-one')[0].pause();
    $('#video-two')[0].play();
    $('#video-three')[0].pause();
  });


  $('.bulk-image-three').on('click', function() {
    $(".bulk").removeClass('one-on');
    $(".bulk").removeClass('two-on');
    $(".bulk").addClass('three-on');
    $('#video-one')[0].pause();
    $('#video-two')[0].pause();
    $('#video-three')[0].play();
  });


  $('.enhance').on('click', function() {
    $(this).addClass('active');
    $(".knockout").removeClass('active');
    $(".photos-knockout").removeClass('active');
    $(".enhance-switcher").removeClass('active');
  });


  $('.knockout').on('click', function() {
    $(this).addClass('active');
    $(".enhance").removeClass('active');
    $(".photos-knockout").addClass('active');
    $(".enhance-switcher").addClass('active');
  });


  $('.revolver').on('click', function() {
    $.fn.fullpage.moveTo(6);
  });


  $('.learn-more').on('click', function() {
    $.fn.fullpage.moveTo(2);
  });

  $('.logo').on('click', function() {
    $.fn.fullpage.moveTo(1);
  });

  $('form').on('submit', function(e) {
    e.preventDefault();
    return false;
  });

  $('#notify-button').on('click', function() {
    var email = $('#notify-email').val().trim();
    if (email) {
      mixpanel.track('homepage-notify-me', { email: email });
      $('.signup-form').addClass('submitted');
      $('#entered-email').text(email);
    }
  });
});

