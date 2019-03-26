$(document).ready(function () {
    // Turn off Google Map zooming

        $('.google-map').addClass('scrolloff'); // set the pointer events to none on doc ready
        $('#map-box').on('click', function () {
            $('.google-map').removeClass('scrolloff'); // set the pointer events true on click
        });
        // you want to disable pointer events when the mouse leave the canvas area;
        $(".google-map").mouseleave(function () {
            $('.google-map').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
        });


    
    /*=================================
    ||          Nivo-lightbox
    ==================================*/

        
        $('.portfolio-item').nivoLightbox({
        effect: 'fade',                             // The effect to use when showing the lightbox
        theme: 'default',                             // The lightbox theme to use
        keyboardNav: true,                             // Enable/Disable keyboard navigation (left/right/escape)
        clickOverlayToClose: true,                    // If false clicking the "close" button will be the only way to close the lightbox
        onInit: function(){},                         // Callback when lightbox has loaded
        beforeShowLightbox: function(){},             // Callback before the lightbox is shown
        afterShowLightbox: function(lightbox){},     // Callback after the lightbox is shown
        beforeHideLightbox: function(){},             // Callback before the lightbox is hidden
        afterHideLightbox: function(){},             // Callback after the lightbox is hidden
        onPrev: function(element){},                 // Callback when the lightbox gallery goes to previous item
        onNext: function(element){},                 // Callback when the lightbox gallery goes to next item
        errorMessage: 'The requested content cannot be loaded. Please try again later.' // Error message when content can't be loaded
    });

            
        

        /*=================================
        ||         Slider
        ==================================*/
            $('.full-screen-slider').owlCarousel({
                loop:true,
                // margin:10,
                items: 1,
                autoplay: true,
                dots: true
            })
          

        /*=================================
        ||          Load more/less
        ==================================*/
        $('#works_container').mixItUp({
            load: {

            },
            pagination: {
                limit: 9,
                maxPager: 0,
                pagerClass: 'display-none btn-niagara',
                prevButtonHTML: '<span class="ion-chevron-left"></span>',
                nextButtonHTML: '<span class="ion-chevron-right"></span>'
            },
            selectors: {

            }
        });


        /*=================================
        ||          hide/show
        ==================================*/

            // $("#iconhideshow").click(function(){
            //     $(this).toggleClass('fa-bars fa-times-circle');
            //     $(".nav").toggleClass('hide show');
            // });
            // $(".btn-opt").click(function(){
            //     $(".header").addClass('hide');
            // });
            $(".btn-opt").on("click",function(e){
                e.preventDefault();
                var selectedMap = $(this).data('header');
                $('.header').addClass('hide');
                $('.header_'+selectedMap).removeClass('hide');
            });

            $(document).ready(function(){
                $("#btn-map").click(function(){
                    $('#map-box').toggleClass('hide show');            
                    $('#btn-map').html($('#btn-map').text() == 'Close map' ? 'View map' : 'Close map');
                });
            })

        // Scroll
        $('.col-box').each(function(){
            var win = $(window).width();
            if (win>=768) {
                var container = $('#testimonial .container').width();
                var col_50_width = (container-30)/2;
                var col = $('div', this);
                var parent_length = col.length*col_50_width;
                $('.col-box').css('width', parent_length);
                $('.col-50').css('width', parent_length/col.length);
            }else{
                var container = $('#testimonial .container').width();
                var col_50_width = container;
                var col = $('div', this);
                var parent_length = col.length*col_50_width;
                $('.col-box').css('width', parent_length);
                $('.col-50').css('width', parent_length/col.length);
            }
        });
        // alert($(window).width());
        if ($(window).width()<522){
            $('.navbar').removeClass('navbar-fixed-top');
        }

        /*=================================
        ||          Contact
        ==================================*/
        $("#contactForm").submit(function(e){

            e.preventDefault();
            var $ = jQuery;

            var postData        = $(this).serializeArray(),
                formURL         = $(this).attr("action"),
                $cfResponse     = $('#contactFormResponse'),
                $cfsubmit       = $("#cfsubmit"),
                cfsubmitText    = $cfsubmit.text();

            $cfsubmit.text("Sending...");


            $.ajax(
                {
                    url : formURL,
                    type: "POST",
                    data : postData,
                    success:function(data)
                    {
                        $cfResponse.html(data);
                        $cfsubmit.text(cfsubmitText);
                        $('#contactForm input[name=name]').val('');
                        $('#contactForm input[name=email]').val('');
                        $('#contactForm textarea[name=message]').val('');
                    },
                    error: function(data)
                    {
                        alert("Error occurd! Please try again");
                    }
                });

            return false;

        });

        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();

             //>=, not <=
            if (scroll >= 500) {
                //clearHeader, not clearheader - caps H
                $(".bg-transparent").addClass("modifide-nav");
            } else{
                $(".bg-transparent").removeClass("modifide-nav");
            }
        });

    });
// $(document).ready(function() {
//     var movementStrength = 25;
//     var height = movementStrength / $(window).height();
//     var width = movementStrength / $(window).width();
//     $(".animation-bg").mousemove(function(e){
//               var pageX = e.pageX - ($(window).width() / 2);
//               var pageY = e.pageY - ($(window).height() / 2);
//               var newvalueX = width * pageX * -1 - 25;
//               var newvalueY = height * pageY * -1 - 50;
//               $('.animation-bg').css("background-position", newvalueX+"px     "+newvalueY+"px");
//     });
// });
$('.navbar').removeClass('navbar-light');
            