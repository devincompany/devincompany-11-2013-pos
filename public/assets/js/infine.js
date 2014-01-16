$(document).ready(function() {
    $('.countdown').countdown({end: (new Date('11/30/2013').getTime() / 1000), now: (new Date().getTime() / 1000)});

    if ($.fn.cssOriginal!=undefined) {
        $.fn.css = $.fn.cssOriginal;
    }

    $('.fullwidthbanner').revolution({
        delay: 9000,
        startheight: 800,
        startwidth: 1170,

        hideThumbs:200,

        thumbWidth:100,
        thumbHeight:50,
        thumbAmount:5,

       navigationType:"bullet",
       navigationArrows:"nexttobullets",
       navigationStyle:"round",

       navigationHAlign:"center",
       navigationVAlign:"bottom",
       navigationHOffset: 0,
       navigationVOffset: 50,

       soloArrowLeftHalign:"left",
       soloArrowLeftValign:"center",
       soloArrowLeftHOffset:20,
       soloArrowLeftVOffset:0,

       soloArrowRightHalign:"right",
       soloArrowRightValign:"center",
       soloArrowRightHOffset:20,
       soloArrowRightVOffset:0,
        touchenabled:"off",
        onHoverStop:"on",

        navOffsetHorizontal:0,
        navOffsetVertical:20,

        hideCaptionAtLimit:0,
        hideAllCaptionAtLilmit:0,
        hideSliderAtLimit:0,

        stopAtSlide:-1,
        stopAfterLoops:-1,
        shadow: 0,
        fullWidth: 'off'
    });


    $('.parallax-first').parallax("50%", 0.05);
    $('.parallax-second').parallax("50%", 0.05);
    $('.parallax-third').parallax("50%", 0.05);

	$('.navigation .nav a[href^="#"], a[href^="#"].roll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1000, 'swing', function () {
	        window.location.hash = target;
	    });
	});

    var styles = [
        {
            "stylers": [
            ]
        }

    ];
    var options = {
        scrollwheel: false,
        mapTypeControlOptions: {
            mapTypeIds: ['Styled']
        },
        center: new google.maps.LatLng(-19.982678,-43.945078),
        zoom: 16,
        disableDefaultUI: true,
        mapTypeId: 'Styled'
    };
    var div = document.getElementById('map');
    var map = new google.maps.Map(div, options);

    new google.maps.Marker({
        position: new google.maps.LatLng(-19.982678,-43.945078),
        map: map
    });

    var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
    map.mapTypes.set('Styled', styledMapType);
});