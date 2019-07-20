jQuery(document).ready(function ($) {

    //Big Image Slider

    $('#slider-block').revolution({
        delay:6000,                                             
        startheight: 600,
        startwidth: 1008,

        hideThumbs: 1000,

        navigationType: 'none', //bullet, thumb, none, both     (No Thumbs In FullWidth Version !)
        navigationArrows: 'nexttobullets', //nexttobullets, verticalcentered, none                          

        touchenabled: 'on', // Enable Swipe Function : on/off
        onHoverStop: 'on', // Stop Banner Timet at Hover on Slide on/off

        navOffsetHorizontal: 0,
        navOffsetVertical: 0,

        dottedOverlay: 'none',
        shadow: 0, //0 = no Shadow, 1,2,3 = 3 Different Art of Shadows  (No Shadow in Fullwidth Version !)
        fullWidth: 'on' // Turns On or Off the Fullwidth Image Centering in FullWidth Modus

    });


//SCROLL TO TOP TRIGGER

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scroll-top').fadeIn('slow');
        } else {
            $('.scroll-top').fadeOut('slow');
        }
    }); 

    $('.scroll-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('.content-slider').parent('.container-slider').hover(function() {        
        $(this).find('.flex-direction-nav').animate({
            opacity: '1'
        }, 200);
    },
    function() {
         $(this).find('.flex-direction-nav').animate({
            opacity: '0'
        }, 200);
    });

//LOCAL LINK FUNCTION   

    $('.local').click(function () {
        var ele = $(this);
        var location = $(ele).attr('href');

        $('html, body').animate({
            scrollTop: $(location).offset().top
        }, 1000);
    });



//ACCORDIONS AND TABS

    $('.accordion').accordion({
        collapsible: true,
        heightStyle: 'content'
    });

    $('.tabs-top, .tabs-top-2').tabs({
        show: {
            effect: 'fadeIn',
            duration: 500
        }
    });

    $('.tabs-side, .tabs-side-2').tabs({
        show: {
            effect: 'fadeIn',
            duration: 500
        }
    }).addClass('ui-tabs-vertical ui-helper-clearfix');

    $('.tabs-side li').removeClass('ui-corner-top').addClass('ui-corner-left');


//PRODUCT QUANTITY

     // This button will increment the value
    $('.qtyplus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('data-field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name='+fieldName+']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
    // This button will decrement the value till 0
    $(".qtyminus").click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('data-field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });

   

// TOOLTIPS

    $('.ttip-top').tooltip({
        position: {
            my: 'center bottom-15',
            at: 'center top',
            using: function (position, feedback) {
                $(this).css(position);
                $('<div>')
                    .addClass('arrow')
                    .addClass(feedback.vertical)
                    .addClass(feedback.horizontal)
                    .appendTo(this);
            }
        }
    });

    $('.ttip-bottom').tooltip({
        position: {
            my: 'center bottom+40',
            at: 'center bottom',
            using: function (position, feedback) {
                $(this).css(position);
                $('<div>')
                    .addClass('arrow')
                    .addClass(feedback.vertical)
                    .addClass(feedback.horizontal)
                    .appendTo(this);
            }
        }
    });

// BLOG IMAGE HOVER

    $('.img-link img').hover(function () {
            $(this).stop().animate({
                opacity: '.7'
            }, 200);
        },
        function () {
            $(this).stop().animate({
                opacity: '1'
            }, 200);
        });


//ISOTOPE SETUP

    // cache container
    var $portfolio_container = $('#filterable');
    var $portfolio_filter = $('.filters li a');
    // filter items when filter link is clicked

    $portfolio_filter.click(function () {
        $portfolio_filter.removeClass('current');
        $(this).addClass('current');
        var selector = $(this).attr('data-filter');

        $portfolio_container.isotope({
            filter: selector
        });
        return false;
    });

    $(window).load(function () {
        $('#filterable').isotope({
            filter: '*',
            layoutMode: 'fitRows'

        });
    });


//ISOTOPE - SHOP PRODUCTS

  /*  // cache container
    var $shop_container = $('#product-container');
    var $shop_filter = $('#shop-filters li a');
    // filter items when filter link is clicked

    $shop_filter.click(function () {
        $shop_filter.removeClass('current');
        $(this).addClass('current');
        var selector = $(this).attr('data-filter');

        $container.isotope({
            filter: selector
        });
        return false;
    });

    $(window).load(function () {
        $('#product-container').isotope({
            filter: '*',
            layoutMode: 'fitRows'

        });
    });*/


//CONTENT ANIMATIONS    

    //ANIMATE ON SCROLL

    $('.no-touch .animated').waypoint(function () {

        var animation = $(this).attr('data-animation');
        var xposition = $(this).attr('data-xposition');
        var yposition = $(this).attr('data-yposition');
        var delay = $(this).attr('data-animation-delay');

        $(this).addClass(animation, function () {
            $(this).css({
                opacity: '1',
                marginLeft: xposition + 'px',
                marginTop: '-' + yposition + 'px',
                animationDelay: delay + 'ms'
            });
        });

    }, {
        offset: '125%',
        triggerOnce: true
    });

    $('.skillbar').waypoint(function () {
        $('.skillbar').each(function () {
            $(this).find('.skillbar-bar').animate({
                width: $(this).attr('data-percent')
            }, 2000);
        });
    }, {
        offset: '125%'
    });


//ANIMATE ON HOVER

    $('.animated-hover').each(function () {

        var el = $(this);
        var animation = el.attr('data-animation');

        el.hover(function () {
                el.addClass('animated ' + animation);
            },
            function () {
                setTimeout(function () {
                    el.removeClass('animated ' + animation); 
                }, 1500); 
            });

    });

//SHARE NETWORKS DROPDOWN

    $('.share-networks').hide();

    $('.share-btn').click(function () {

        if ($(this).is('.closed')) {
            $(this).removeClass('closed').addClass('opened').prev('.share-networks').slideDown(500);
            return false;
        } else {
            $(this).removeClass('opened').addClass('closed').prev('.share-networks').slideUp(500);
            return false;
        }

    });

}); //END of jQuery
