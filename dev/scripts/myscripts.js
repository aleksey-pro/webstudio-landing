$(document).ready(function() {
  
//some hover effects  
  $('.b-team__caption').hover(function(){
    $(this).parents('.b-team__card').find('.b-team__name').toggleClass('b-team__name_active');
  });
  $('.b-news__caption').hover(function(){
    $(this).closest('.b-news__card').find('.b-news__title').toggleClass('b-news__title_active');
  });
  $('.b-recent-block__text').hover(function(){
    $(this).toggleClass('b-recent-block__text_active').parent('.b-recent-block').find('.b-recent-block__link').toggleClass('b-recent-block__link_active');
  });
  $('.b-activities__icon').hover (function(){
      $(this).toggleClass('b-activities__icon_active');
  });

 // mobile menu

  $('.tcon-menu--xbutterfly').click(function(){
    console.log(this);
    $('.b-dropdown-menu').toggleClass('b-dropdown-menu_active');
  });

// transformicons init	
	transformicons.add('.tcon');
	$('.tcon-search--xcross').click(function (){
		$('.b-header-element__input').toggle('slow');
	});

// fullpage init

   $('#fullpage').fullpage({
      anchors: ['sec1', 'sec2', 'sec3', 'sec4', 'sec5', 'sec6', 'sec-footer'],
      menu: '#menu',
      scrollBar: true,
      responsiveWidth: 480,
      
     // http://jsfiddle.net/photous/qn084vmn/
   });

// pictures sorting	http://isotope.metafizzy.co
	var $grid = $('.b-gallery__grid').isotope({
		itemSelector: '.b-gallery__item',
		masonry: {
			isFitWidth: true  
		}
	});
	$('#filter-button-group').on( 'click', 'li', function() {
	var filterValue = $(this).attr('data-filter');
	$grid.isotope({ filter: filterValue });	
	});
	// change is-checked class on buttons
	$('.b-gallery__nav').each( function( i, buttonGroup ) {
	  var $buttonGroup = $( buttonGroup );
	  $buttonGroup.on( 'click', 'li', function() {
		$buttonGroup.find('.b-gallery__btn_checked').removeClass('b-gallery__btn_checked');
		$( this ).addClass('b-gallery__btn_checked');
	  });
	});

  // gallery pictures pop-up

  function popUp() {
    var animTime = 800;
    var modal = $('#modal-image');
    if ($(window).innerWidth > 400) {
      $('.b-gallery__item img').on('click', function() {
        modal.css('top', (window.innerHeight - modal.height()) / 2);
        modal.css('left', ($('.b-gallery__grid').width() - modal.width()) / 2);
        modal.attr({'src': $(this).attr('src'), 'width': '400', 'height': '400'}).fadeIn(animTime);
      });
      modal.on('click', function() {
        $(this).fadeOut(animTime);
      });
    }
  }
  $(window).bind('resize',function(){
    popUp();
  });

});





// Modernizr 3 detections
// https://medium.com/@MarkHoKane/modernizr-ditched-yepnope-js-how-to-load-your-polyfill-fec5dddb5867#.qwle9xdmz
// https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills

if (Modernizr.localstorage) {
  console.log('storage unnecessary!');
}else{
  jQuery.getScript("scripts/storage.min.js")
  .done(function() {
    console.log('storage Loaded!');
  })
  .fail(function() {
    console.log('storage Did Not Load!');
  });
}
if (Modernizr.flexboxlegacy) {
  console.log('flexie unnecessary!');
}else{
  jQuery.getScript("scripts/flexie.min.js")
  .done(function() {
    console.log('flexie Loaded!');
  })
  .fail(function() {
    console.log('flexie Did Not Load!');
  });
}
